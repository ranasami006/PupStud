import React from 'react';
import {
  StyleSheet, Text, View, Dimensions,
  Image, Animated, PanResponder, StatusBar,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import { AntDesign } from '@expo/vector-icons';
const Users = [
  { id: "1", uri: require('../assets/blacktri.jpg'), name: "Tri Black", description: "Breed with ease!", location: "10 miles away" },
  { id: "2", uri: require('../assets/download.jpg'), name: "Tri Black", description: "Breed with ease!", location: "10 miles away" },
  { id: "3", uri: require('../assets//Stud1.jpg'), name: "Tri Black", description: "Breed with ease!", location: "10 miles away" },
  { id: "4", uri: require('../assets/Stud2.jpg'), name: "Tri Black", description: "Breed with ease!", location: "10 miles away" },
  { id: "5", uri: require('../assets/Stud3.jpg'), name: "Tri Black", description: "Breed with ease!", location: "10 miles away" },
]
const length = Users.length;
export default class Home extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      showView: false,
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

            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })

          }
          )
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })

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
  onHeartClick = () => {
    //this.PanResponder.panHandlers
    this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
      this.position.setValue({ x: 0, y: 0 })
    })
  }
  onCloseClick = () => {
    //this.PanResponder.panHandlers
    this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
      this.position.setValue({ x: 0, y: 0 })
    })
  }

  renderUsers = () => {

    return Users.map((item, i) => {

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
              source={item.uri} imageStyle={{ borderRadius: 40 }} >
              {/* <TouchableOpacity style={{width:'100%',height:'100%'}}
           onPress={() => {
            this.props.navigation.navigate("Detail");
        }}
           >  */}
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
                  this.props.navigation.navigate("Detail");
                }}
              >
                <AntDesign name="infocirlce" size={30} color="white" />
              </TouchableOpacity>
              {/* </TouchableOpacity> */}
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
              source={item.uri} imageStyle={{ borderRadius: 40 }} >
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

        <View style={{}}>

          {this.state.currentIndex >= length ?
            <Text>okokoko</Text>
            :
            this.renderUsers()}
        </View>
        <View style={{ height: 60 }}>

        </View>


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
