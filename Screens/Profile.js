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
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveData, getData } from "../Component/firebaseConfig/utility";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        }
    }
    async componentDidMount() {
        let userId = await AsyncStorage.getItem("Token");
        let userData = await getData('users', userId);

        await this.setState({
            userData: userData,
        })


    }

    render() {
        //const breedvalue = this.state.dropdown_6_icon_heart ? require('../assets/icon/icons8-facebook-f1.png') : require('../assets/icon/icons8-google1.png');
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0, padding: 16, marginTop: -50, }}>
                    <View style={styles.profileView}>
                        <View style={{
                            alignItems: 'center',
                        }}>
                           {this.state.userData.image?(
                           
                           
                           
                           <Image
                                
                                source={{ uri: this.state.userData.image }}
                                style={styles.icon}></Image>
                                ):(
                                    <Image
                                
                                    source={require('.././assets/peofileDemo.jpeg')}
                                    style={styles.icon}></Image>
                                )}
                            <Text style={{ fontSize: responsiveFontSize(5), fontWeight: 'bold' }}>{this.state.userData.firstname}</Text>
                            <Text style={{ fontSize: responsiveFontSize(2) }}>offering Stud & Looking for Stud</Text>
                        </View>
                        <View style={styles.firsticonRow}>
                            <View>
                                <TouchableOpacity style={styles.SettingView} onPress={() => this.props.navigation.navigate('Settings')}>
                                    <Image
                                        source={require('../assets/icon/settings_24px.png')}
                                        style={styles.Settingicon}></Image>
                                </TouchableOpacity>
                                <Text style={{ marginHorizontal: responsiveHeight(6), fontSize: responsiveFontSize(2), color: "#757575" }}>
                                    Settings
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.SettingView1}
                                    onPress={() => {
                                        this.props.navigation.navigate("EditInfo",{item:this.state.userData});
                                    }}
                                >

                                    <Image
                                        source={require('../assets/icon/edit_24px.png')}
                                        style={styles.Settingicon}></Image>

                                </TouchableOpacity >
                                <Text style={{ marginHorizontal: responsiveHeight(5), fontSize: responsiveFontSize(2), color: "#757575" }}>
                                    Edit Info
                               </Text>
                            </View>

                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Addmedia");
                            }}
                            style={styles.CameraView}>

                            <Image
                                source={require('../assets/icon/camera_alt_24px.png')}
                                style={styles.Settingicon}></Image>
                        </TouchableOpacity>
                        <Text style={{ alignSelf: 'center', fontSize: responsiveFontSize(2), color: "#757575" }}>
                            Add media
                        </Text>

                    </View>
                    <View style={styles.bottomView}>
                        <Image
                            source={require('../assets/icon/location_on_24px.png')}
                            style={styles.Locationicon}></Image>
                        <Text style={{ margin: responsiveHeight(0), fontSize: responsiveFontSize(2.5), color: "#F44609", alignSelf: 'center' }}>
                            Swipe around Breeds
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
};
const styles = StyleSheet.create({

    profileView: {
        width: windowWidth + 15,
        height: windowHeight / 1.3,
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        borderBottomLeftRadius: responsiveHeight(25),
        borderBottomRightRadius: responsiveHeight(25),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 13,
        overflow: 'hidden',
    },
    firsticonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        marginTop: responsiveHeight(10),
        width: 150, height: 150, borderRadius: 150 / 2
    },
    SettingView1: {
        width: 70, height: 70, borderRadius: 70 / 2,
        backgroundColor: 'white',
        marginHorizontal: responsiveHeight(4),
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    SettingView: {
        width: 70, height: 70, borderRadius: 70 / 2,
        backgroundColor: 'white',
        marginHorizontal: responsiveHeight(5),
        justifyContent: 'center'
    },
    Settingicon: {
        width: 50, height: 50, borderRadius: 50 / 2,
        alignSelf: 'center',
    },
    CameraView: {
        width: 70, height: 70, borderRadius: 70 / 2,
        backgroundColor: '#F44609',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    bottomView: {
        flexDirection: 'row',
        marginTop: responsiveHeight(2.5),
        alignContent: 'center', justifyContent: 'center'
    },
    Locationicon: {
        width: 50, height: 50,
        alignSelf: 'center',
    },

});
