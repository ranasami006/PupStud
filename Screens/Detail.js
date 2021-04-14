import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllOfCollection, getAllOfCollectionWithStud, saveDataWithoutDocId, getAllOfCollectionWithCondition, saveData, getAllOfCollectionwithSettings } from '../Component/firebaseConfig/utility'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.route.params.Item,
        }
    }
async componentDidMount(){
    // const Item = this.props.route.params.Item;
    // console.log(Item);
}
async LikeDislike(id) {
    let Token = await AsyncStorage.getItem("Token");
    // this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
    //   this.position.setValue({ x: 0, y: 0 })
    // })
    await saveDataWithoutDocId('LikeDislike',
      {
        userId: Token,
        studId: this.state.item.id,
        type: id
      }

    )
    if (id === "1") {
      await saveDataWithoutDocId("messageRequest",
        {
          likerId: Token,
          ownerId: this.state.item.ownerId,
          requestChat: true,
          studId: this.state.item.id
        }
      )
    }
this.props.navigation.navigate("Home")

  }
  onHeartClick = () => {
    //this.PanResponder.panHandlers
    this.LikeDislike("1")
  }
  onCloseClick = () => {
    //this.PanResponder.panHandlers
    this.LikeDislike("0")
  }

    render() {
        //console.log('navigation', this.props.route.params.Item)
        const { navigation } = this.props
        const Item = this.props.route.params.Item;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Image style={{ height: '60%', width: '100%', marginTop: responsiveHeight(0) }}
                    source={require('../assets/blacktri.jpg')}
                >
                </Image>
                <View style={styles.name}>
                    <Text style={styles.nameText}>{Item.name}</Text>
                    <Image style={{ height: responsiveHeight(4), width:responsiveHeight(4) , alignSelf: 'center', margin: responsiveHeight(1) }}
                        source={require('../assets/icon/Vector.png')}
                    />
                </View>
                <ScrollView style={{ marginTop: 10 }}>
                    <View style={styles.bottomView}>
                        <Image style={{ height: responsiveHeight(3), width: responsiveHeight(3), marginHorizontal: responsiveHeight(1) }}
                            source={require('../assets/icon/icons8-home1.png')}
                        />
                        <Text style={styles.bottomText}>{Item.location}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Image style={{ height: responsiveHeight(3.2), width: responsiveHeight(2.3), marginHorizontal: responsiveHeight(1) }}
                            source={require('../assets/icon/location_on.png')}
                        />
                        <Text style={styles.bottomText}>From Los Angeles</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Image style={{ height: responsiveHeight(3), width: responsiveHeight(3), marginHorizontal: responsiveHeight(1) }}
                            source={require('../assets/icon/age.png')}
                        />
                        <Text style={styles.bottomText}>{Item.age}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Image style={{ height: responsiveHeight(3), width: responsiveHeight(3), marginHorizontal: responsiveHeight(1) }}
                            source={require('../assets/icon/genetics.png')}
                        />
                        <Text style={styles.bottomText}>{Item.genetics}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Image style={{ height: responsiveHeight(3), width: responsiveHeight(3), marginHorizontal: responsiveHeight(1) }}
                            source={require('../assets/icon/icons8-title-961.png')}
                        />
                        <Text style={styles.bottomText}>{Item.title}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Image style={{ height: responsiveHeight(3), width: responsiveHeight(3), marginHorizontal: responsiveHeight(1) }}
                            source={require('../assets/icon/invert_colors.png')}
                        />
                        <Text style={styles.bottomText}>{Item.color}</Text>
                    </View>
                </ScrollView >

                <View style={styles.bottomView1}>
                    <TouchableOpacity 
                    onPress={this.onCloseClick}
                    style={styles.crossIconView}>
                        <Image
                            source={require('../assets/icon/close_24px.png')}
                            style={styles.crossIcon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={this.onHeartClick}
                    style={styles.crossIconView}>
                        <Image
                            source={require('../assets/icon/icons8-heart-961.png')}
                            style={styles.crossIcon}></Image>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
};
const styles = StyleSheet.create({
    name: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
    },
    nameText: {
        fontSize: responsiveFontSize(5.1),
        fontWeight: 'bold',
        padding: responsiveWidth(5)
    },
    bottomView: {
        flexDirection: 'row',
        padding: 5,
    },
    bottomText: {
        fontSize: responsiveFontSize(2),
        marginLeft: responsiveHeight(1)
    },
    bottomView1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
       // marginTop: responsiveHeight(2.5),
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
        elevation:10,
    },
    hearticon: {
        width: 100,
        height: 100,
    },
});
