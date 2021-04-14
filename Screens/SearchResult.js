import React from 'react';
import {
  StyleSheet, Text, View, Dimensions,
  Image, Animated, PanResponder, StatusBar,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import { AntDesign } from '@expo/vector-icons';
import { saveDataWithoutDocId, getAllOfCollectionWithCondition, saveData, getAllOfCollectionwithSettings } from '../Component/firebaseConfig/utility'

export default class SearchResult extends React.Component {

  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      showView: false,
      Users: [],
      length: '',
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }

  async LikeDislike(id) {
    let Token = await AsyncStorage.getItem("Token");
    this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
      this.position.setValue({ x: 0, y: 0 })
    })
    await saveDataWithoutDocId('LikeDislike',
      {
        userId: Token,
        studId: this.state.Users[this.state.currentIndex - 1].id,
        type: id
      }

    )
    if (id === "1") {
      await saveDataWithoutDocId("messageRequest",
        {
          likerId: Token,
          ownerId: this.state.Users[this.state.currentIndex - 1].ownerId,
          requestChat: true,
          studId: this.state.Users[this.state.currentIndex - 1].id
        }
      )
    }
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },

      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.LikeDislike("1")
          }
          )
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {

            this.LikeDislike("0")

          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  async componentDidMount() {
    this.setState({ succes: true })
    let breedvalue = await AsyncStorage.getItem("breedvalue")
    let title = await AsyncStorage.getItem("title")
    let color = await AsyncStorage.getItem("color")
    let health = await AsyncStorage.getItem("health")
    let genetics = await AsyncStorage.getItem("genetics")
    let Registries = await AsyncStorage.getItem("Registries")
    let Token = await AsyncStorage.getItem("Token");
    let arr3;

    let Data = await getAllOfCollectionwithSettings("studs", 
      breedvalue, title, color,
      health, genetics, Registries
      )

    let LikeDislike = await getAllOfCollectionWithCondition("LikeDislike", Token)
    
   
    if (LikeDislike.length > 0 && Data.length>0) { 
      console.log("TEST LAhore")
      arr3 = [].concat(
        Data.filter(obj1 => LikeDislike.every(obj2 => obj1.id !== obj2.studId)),
        LikeDislike.filter(obj2 => Data.every(obj1 => obj2.studId !== obj1.id))
      );
    }
    else{
      arr3=Data;
      console.log("TEST PAKISTAN")
    }
  
    arr3 = await arr3.filter(arr3 => arr3.ownerId != Token);
    console.log(Data)
    let length = arr3.length;
    await this.setState({
      Users: arr3,
      length: length,
      succes: false,
    })

  }
  onHeartClick = () => {
    //this.PanResponder.panHandlers
    this.LikeDislike("1")
  }
  onCloseClick = () => {
    //this.PanResponder.panHandlers
    this.LikeDislike("0")
  }

  renderUsers = () => {

    return this.state.Users.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <ImageBackground
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 40 }}
              source={{ uri: item.uri[0] }} imageStyle={{ borderRadius: 40 }} >

              <View style={{
                position: "absolute",
                bottom: 0,
                marginHorizontal: responsiveHeight(2.5),
                padding: responsiveHeight(1),
                //flexDirection:'row',
              }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(4) }}>{item.name}</Text>
                <Text style={{ color: 'white', fontWeight: '100', fontSize: responsiveFontSize(2) }}>{item.description}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/icon/location_on_24px.png')} style={styles.icon} />
                  <Text style={{
                    color: 'white', fontWeight: '100',
                    fontSize: responsiveFontSize(2),
                    alignSelf: 'center'
                  }}>
                    {item.location}</Text>
                </View>

              </View>
              <TouchableOpacity style={{

                position: 'absolute',
                bottom: 0,
                alignSelf: 'flex-end',
                padding: responsiveHeight(5)
              }}
                onPress={() => {
                  this.props.navigation.navigate("Detail",
                    { Item: item }
                  );
                }}
              >
                <AntDesign name="infocirlce" size={30} color="white" />
              </TouchableOpacity>

            </ImageBackground>
            <View style={styles.bottomView}>
              <View style={styles.crossIconView}>
                <TouchableOpacity onPress={this.onCloseClick}>
                  <Image
                    source={require('../assets/icon/close_24px.png')}
                    style={styles.crossIcon}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.crossIconView}>
                <TouchableOpacity onPress={this.onHeartClick}>
                  <Image
                    source={require('../assets/icon/icons8-heart-961.png')}
                    style={styles.crossIcon}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        )
      }

      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <ImageBackground
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 40 }}
              source={{ uri: item.uri }} imageStyle={{ borderRadius: 40 }} >
              <View style={{
                position: "absolute",
                bottom: 0,
                marginHorizontal: responsiveHeight(2.5),
                padding: responsiveHeight(1),
              }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(4) }}>{item.name}</Text>
                <Text style={{ color: 'white', fontWeight: '100', fontSize: responsiveFontSize(2) }}>{item.description}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/icon/location_on_24px.png')} style={styles.icon} />
                  <Text style={{ color: 'white', fontWeight: '100', fontSize: responsiveFontSize(2), alignSelf: 'center' }}>{item.location}</Text>
                </View>
              </View>
              <TouchableOpacity style={{
                position: 'absolute',
                bottom: 0,
                alignSelf: 'flex-end',
                padding: responsiveHeight(5)
              }}
                onPress={() => {
                  this.props.navigation.navigate("Detail");
                }}
              >
                <AntDesign name="infocirlce" size={30} color="white" />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottomView}>
              <View style={styles.crossIconView}>
                <Image
                  source={require('../assets/icon/close_24px.png')}
                  style={styles.crossIcon}></Image>
              </View>
              <View style={styles.crossIconView}>
                <Image
                  source={require('../assets/icon/icons8-heart-961.png')}
                  style={styles.crossIcon}></Image>
              </View>
            </View>
          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#F44609"
          barStyle="light-content"
          translucent
        />
        {this.state.succes ?
          <ActivityIndicator style={{ marginTop: responsiveHeight(30) }} size={'large'} color={'#F44609'} />
          : (
            <>
              <View style={{}}>

                {this.state.currentIndex >= this.state.length ?
                  <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: responsiveFontSize(2.5) }}>No stud availble come back later</Text>
                  :
                  this.renderUsers()}
              </View>
              <View style={{ height: 60 }}>

              </View>
            </>
          )
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: -10
  },
  crossIcon: {
    width: 50, height: 50, borderRadius: 50 / 2,
    alignSelf: 'center',
  },
  crossIconView: {
    width: 70, height: 70, borderRadius: 70 / 2,
    backgroundColor: 'white',
    marginHorizontal: responsiveHeight(4),
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  hearticon: {
    width: 100,
    height: 100,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: responsiveHeight(2.5),
  },
});
