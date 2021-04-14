// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    StatusBar,
    Slider,
    Switch,
    ScrollView,
    Platform,
    Dimensions,
    ImageBackground,

} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Header, Avatar, colors } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getData, getAllOfCollectionWithStud,uploadProductImage, saveData } from '../Component/firebaseConfig/utility';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
export default class EditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
            image6: '',
            image7: '',
            image8: '',
            image9: '',
            index: 1,
            aboutBreed:"",
            downloadImgURL: [],
            studData1:{},
            userinfo: this.props.route.params.item,
        }
    }

    async componentDidMount() {
        let userId = await AsyncStorage.getItem('Token')
        let studData = await getAllOfCollectionWithStud('studs', userId)
        this.state.studData1=studData[0];
        
        await this.setState({ studData: studData,userId:userId,
            
            breedvalue:this.state.studData1.breedvalue,
            aboutBreed:this.state.studData1.aboutBreed,
            title:this.state.studData1.title,
            color:this.state.studData1.color,
            health:this.state.studData1.health,
            genetics:this.state.studData1.genetics,
            Registries:this.state.studData1.Registries,
         
        })
        await this.setState({
            firstname:this.state.userinfo.firstname,
            lastname:this.state.userinfo.lastname,
            email:this.state.email,
            imageuser:this.state.userinfo.image,

        })


        if (this.state.studData[0].uri[0]) {
            this.setState({
                image1: this.state.studData[0].uri[0]
            })
        }
        if (this.state.studData[0].uri[1]) {
            this.setState({
                image2: this.state.studData[0].uri[1]
            })
        }
        if (this.state.studData[0].uri[2]) {
            this.setState({
                image3: this.state.studData[0].uri[2]
            })
        }
        if (this.state.studData[0].uri[3]) {
            this.setState({
                image4: this.state.studData[0].uri[3]
            })
        }
        if (this.state.studData[0].uri[4]) {
            this.setState({
                image5: this.state.studData[0].uri[4]
            })
        }
        if (this.state.studData[0].uri[5]) {
            this.setState({
                image6: this.state.studData[0].uri[5]
            })
        }
        if (this.state.studData[0].uri[6]) {
            this.setState({
                image7: this.state.studData[0].uri[6]
            })
        }
        if (this.state.studData[0].uri[7]) {
            this.setState({
                image8: this.state.studData[0].uri[7]
            })
        }
        if (this.state.studData[0].uri[8]) {
            this.setState({
                image9: this.state.studData[0].uri[8]
            })
        }

        // console.log("YOOOOO",this.state.image1)
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }

    }
    onDonePress= async() => {
        this.setState({success:true})
        let { downloadImgURL } = this.state      
        if(this.state.image1)
                {     
                      let downloadURL = await uploadProductImage(this.state.image1);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.image2)
                {    
                      let downloadURL = await uploadProductImage(this.state.image2);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.image3)
                {    
                      let downloadURL = await uploadProductImage(this.state.image3);
                      downloadImgURL.push(downloadURL);
                }       
                if(this.state.image4)
                {    
                      let downloadURL = await uploadProductImage(this.state.image4);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.image5)
                {    
                      let downloadURL = await uploadProductImage(this.state.image5);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.image6)
                {    
                      let downloadURL = await uploadProductImage(this.state.image6);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.image7)
                {    
                      let downloadURL = await uploadProductImage(this.state.image7);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.image8)
                {    
                      let downloadURL = await uploadProductImage(this.state.image8);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.image9)
                {    
                      let downloadURL = await uploadProductImage(this.state.image9);
                      downloadImgURL.push(downloadURL);
                }
                if(this.state.imageuser)
                {    
                      let downloadURL = await uploadProductImage(this.state.imageuser);
                     this.setState({imageuser:downloadURL})
                }
        let success= await saveData('studs',this.state.studData[0].id,{
            uri:downloadImgURL,
            breedvalue:this.state.breedvalue,
            aboutBreed:this.state.aboutBreed,
            title:this.state.title,
            color:this.state.color,
            health:this.state.health,
            genetics:this.state.genetics,
            Registries:this.state.Registries,
        }) 

        let  success2 = await saveData('users',this.state.userId,{
            image:this.state.imageuser,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
           // email:this.state.email,
        })
    
        
       this.props.navigation.navigate('Profile')

    }

    showBreed = () => {
        this.setState({
            isBreed: !this.state.isBreed,

        })
    }
    isDoodles = () => {
        this.setState({
            isDoodles: !this.state.isDoodles,
        })

        if (!this.state.isDoodles) {
            this.setState({
                isAussie: false,
                isAussieDoodles: false,
                breedvalue: "Doodles",
            })
        }
    }

    isAussie = () => {
        this.setState({
            isAussie: !this.state.isAussie,
        })
        if (!this.state.isAussie) {
            this.setState({
                isDoodles: false,
                isAussieDoodles: false,
                breedvalue: "Aussie",
            })
        }
    }
    isAussieDoodles = () => {
        this.setState({
            isAussieDoodles: !this.state.isAussieDoodles,
        })
        if (!this.state.isAussieDoodles) {
            this.setState({
                isDoodles: false,
                isAussie: false,
                breedvalue: "Aussie Doddles",
            })
        }
    }



    imagePicker1 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


       // console.log(result);

        if (!result.cancelled) {
            this.setState({ image1: result.uri });
        }
    }
    imagePicker2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log(result);

        if (!result.cancelled) {
            this.setState({ image2: result.uri });
        }
    }
    imagePicker3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log(result);

        if (!result.cancelled) {
            this.setState({ image3: result.uri });
        }
    }
    imagePicker4 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log(result);

        if (!result.cancelled) {
            this.setState({ image4: result.uri });
        }
    }
    imagePicker5 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log(result);

        if (!result.cancelled) {
            this.setState({ image5: result.uri });
        }
    }
    imagePicker6 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log(result);

        if (!result.cancelled) {
            this.setState({ image6: result.uri });
        }
    }
    imagePicker7 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log(result);

        if (!result.cancelled) {
            this.setState({ image7: result.uri });
        }
    }
    imagePicker8 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log(result);

        if (!result.cancelled) {
            this.setState({ image8: result.uri });
        }
    }
    imagePicker9 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        //console.log(result);
        if (!result.cancelled) {
            this.setState({ image9: result.uri });
        }
    }
    imageuser = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            this.setState({ imageuser: result.uri });
        }
        console.log("OKKKKK", result.uri)
    }
    
    render() {
        //const breedvalue = this.state.dropdown_6_icon_heart ? require('../assets/icon/icons8-facebook-f1.png') : require('../assets/icon/icons8-google1.png');
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar
                    backgroundColor="grey"
                    barStyle="light-content"
                    translucent
                />
                <ScrollView style={{ marginBottom: 10 }} >
                    <View style={{
                        marginTop: Constants.statusBarHeight,
                        backgroundColor: 'grey'
                    }}>
                        <Header
                            backgroundColor={'white'}
                            leftComponent={
                                <TouchableOpacity style={{
                                    alignContent: 'flex-start',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start'
                                }}
                                    onPress={() => {
                                        this.props.navigation.goBack();
                                    }}
                                >
                                    <Text style={{
                                        color: '#757575',
                                        fontSize: responsiveFontSize(2.5),
                                        alignSelf: 'center', marginTop: -10
                                    }}>
                                        cancel</Text>
                                </TouchableOpacity>
                            }
                            centerComponent={{
                                text: 'Edit Info',
                                style: { color: '#757575', fontSize: responsiveFontSize(3), fontWeight: 'bold', alignSelf: 'center', marginTop: -15 }
                            }}

                            rightComponent={
                                <TouchableOpacity style={{
                                    alignContent: 'flex-start',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start'
                                }}
                                    onPress={() => {
                                        this.onDonePress()
                                        //this.props.navigation.navigate("Profile");
                                    }}
                                >
                                    <Text style={{
                                        color: '#F44609',
                                        fontSize: responsiveFontSize(2.5),
                                        alignSelf: 'center',
                                        marginTop: -10

                                    }}>
                                        Done</Text>
                                </TouchableOpacity>
                            }
                            statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: '#757575' }}
                            containerStyle={{ borderBottomColor: '#85106a', borderBottomWidth: 0, color: 'red' }}
                            style={{ backgroundColor: 'red', elevation: 5 }}
                        />
                        <View style={styles.EditInfo}>
                            <TouchableOpacity style={{
                                width: '50%', height: '100%',
                                alignItems: 'center', justifyContent: 'center',
                            }}
                                onPress={() => {
                                    this.setState({
                                        index: 1,
                                    })
                                }}
                            >
                                <Text style={{
                                    textAlign: 'center', alignSelf: 'center', color: this.state.index === 1 ? "#F44609" : '#757575',
                                    fontSize: responsiveFontSize(2.5),
                                }}>Breed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        index: 2,
                                    })
                                }}
                                style={{ backgroundColor: "white", width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{
                                    textAlign: 'center', alignSelf: 'center', color: this.state.index === 2 ? "#F44609" : '#757575',
                                    fontSize: responsiveFontSize(2.5),
                                }}>Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {this.state.index === 1 ? (
                        <>

                            <View style={styles.bottomView}>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker1()}>

                                    {this.state.image1 ? (
                                        <>
                                            <Image source={{ uri: this.state.image1 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker2()}>

                                    {this.state.image2 ? (
                                        <>
                                            <Image source={{ uri: this.state.image2 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker3()}>

                                    {this.state.image3 ? (
                                        <>
                                            <Image source={{ uri: this.state.image3 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottomView}>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker4()}>

                                    {this.state.image4 ? (
                                        <>
                                            <Image source={{ uri: this.state.image4 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker5()}>

                                    {this.state.image5 ? (
                                        <>
                                            <Image source={{ uri: this.state.image5 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker6()}>

                                    {this.state.image6 ? (
                                        <>
                                            <Image source={{ uri: this.state.image6 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottomView}>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker7()}>

                                    {this.state.image7 ? (
                                        <>
                                            <Image source={{ uri: this.state.image7 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker8()}>

                                    {this.state.image8 ? (
                                        <>
                                            <Image source={{ uri: this.state.image8 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageView} onPress={() => this.imagePicker9()}>

                                    {this.state.image9 ? (
                                        <>
                                            <Image source={{ uri: this.state.image9 }}
                                                style={{ width: '100%', height: '100%', borderRadius: responsiveHeight(2) }}
                                            >

                                            </Image>
                                            <View style={styles.editView}>

                                                <MaterialIcons name="edit" size={30} color="#F44609" />

                                            </View>
                                        </>
                                    ) :

                                        <View style={styles.editViewplus}>

                                            <Entypo name="plus" size={30} color="white" />
                                        </View>
                                    }

                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={[styles.textView, { marginTop: responsiveHeight(3) }]}
                                onPress={() => this.showBreed()}
                            >
                                <Text style={styles.breedtext}>Show Breed type</Text>
                                <View style={styles.secondView}>

                                    <View style={styles.dropdownIn}>
                                        <Text style={styles.secondTextView}>{this.state.breedvalue}</Text>
                                        <Ionicons name="chevron-down" size={24} color="black" style={{ alignSelf: 'center', marginRight: 5 }} />
                                    </View>

                                </View>
                            </TouchableOpacity>

                            {this.state.isBreed ? (
                                <View style={styles.switchView}>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between',
                                        alignContent: 'space-between',
                                    }}>
                                        <Text style={styles.secondTextDropView}>Doodles</Text>
                                        <Switch
                                            trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                                            thumbColor={this.state.isDoodles ? '#F44609' : '#757575'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={this.isDoodles}
                                            value={this.state.isDoodles}
                                            style={styles.switch}
                                        />
                                    </View>

                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between',
                                        alignContent: 'space-between',
                                    }}>
                                        <Text style={styles.secondTextDropView}>Aussie Doodles</Text>
                                        <Switch
                                            trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                                            thumbColor={this.state.isAussieDoodles ? '#F44609' : '#757575'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={this.isAussieDoodles}
                                            value={this.state.isAussieDoodles}
                                            style={styles.switch}
                                        />
                                    </View>

                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between',
                                        alignContent: 'space-between',
                                    }}>
                                        <Text style={styles.secondTextDropView}>Aussie</Text>
                                        <Switch
                                            trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                                            thumbColor={this.state.isAussie ? '#F44609' : '#757575'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={this.isAussie}
                                            value={this.state.isAussie}
                                            style={styles.switch}
                                        />
                                    </View>
                                </View>
                            ) : null}
                            <Text style={styles.labelText}>{"ABOUT BREED"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.aboutBreed}
                                    onChangeText={(text) => {
                                        this.setState({ aboutBreed: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"Titles"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.title}
                                    onChangeText={(text) => {
                                        this.setState({ title: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"Color"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.color}
                                    onChangeText={(text) => {
                                        this.setState({ color: text });
                                    }}
                                />
                            </View>

                            <Text style={styles.labelText}>{"Health Testing"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.health}
                                    onChangeText={(text) => {
                                        this.setState({ health: text });
                                    }}
                                />
                            </View>

                            <Text style={styles.labelText}>{"Genetics"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.genetics}
                                    onChangeText={(text) => {
                                        this.setState({ genetics: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"Registries"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.Registries}
                                    onChangeText={(text) => {
                                        this.setState({ Registries: text });
                                    }}
                                />
                            </View>
                        </>
                    ) :
                        <View>
                            <TouchableOpacity onPress={this.imageuser}>
                                <ImageBackground source={
                                    !this.state.imageuser ?
                                        {
                                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                                        }
                                        :
                                        {
                                            uri: this.state.imageuser
                                        }
                                }
                                    borderRadius={150 / 2}
                                    style={{
                                        width: 150, height: 150, borderRadius: 150 / 2, alignSelf: "center",
                                        marginTop: responsiveHeight(2), justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Ionicons name="camera-outline" size={32} color="white"
                                        style={{ alignSelf: 'center' }}
                                    />
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style={{
                                alignSelf: "center", elevation: 5,
                                width: responsiveWidth(60),
                                height: responsiveHeight(6),
                                backgroundColor: 'white',
                                marginTop: responsiveHeight(2),
                                justifyContent: 'center',
                                flexDirection: 'row',
                                borderRadius: responsiveHeight(0.5),
                                alignContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{
                                    textAlign: 'center', color: 'black',
                                    fontSize: responsiveFontSize(1.6),
                                    fontWeight: 'bold'
                                }}>Offering Stud and looking for Stud!</Text>
                                <MaterialIcons name="edit" size={24} color="black" />
                            </View>

                            <Text style={styles.labelText}>{"First Name"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'User'}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.firstname}
                                    onChangeText={(text) => {
                                        this.setState({ firstname: text });
                                    }}
                                />
                            </View>

                            <Text style={styles.labelText}>{"Last Name"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'John'}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.lastname}
                                    onChangeText={(text) => {
                                        this.setState({ lastname: text });
                                    }}
                                />
                            </View>

                            <Text style={styles.labelText}>{"Email"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Sample@mail.com'}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.email}
                                    onChangeText={(text) => {
                                        this.setState({ email: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"Change Password"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.changepassword}
                                    onChangeText={(text) => {
                                        this.setState({ changepassword: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"Change Phone"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <View style={styles.dropicon}>
                                    <Text style={styles.breedtext}>{""}</Text>
                                </View>
                                <View style={styles.buttonIconSeparatorStyle} />
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={''}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.phone}
                                    onChangeText={(text) => {
                                        this.setState({ phone: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"Kennel Name"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Sample@mail.com'}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.registries}
                                    onChangeText={(text) => {
                                        this.setState({ registries: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"FB link"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Sample@mail.com'}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.registries}
                                    onChangeText={(text) => {
                                        this.setState({ registries: text });
                                    }}
                                />
                            </View>
                            <Text style={styles.labelText}>{"URL link"}</Text>
                            <View style={[styles.textView, { marginTop: responsiveHeight(1) }]}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Sample@mail.com'}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.registries}
                                    onChangeText={(text) => {
                                        this.setState({ registries: text });
                                    }}
                                />
                            </View>

                        </View>
                    }



                </ScrollView>
            </SafeAreaView>
        );
    }
};
const styles = StyleSheet.create({
    bottomView: {
        flexDirection: 'row',
        margin: responsiveHeight(1),
    },
    imageView: {
        backgroundColor: '#d3d3d3',
        borderRadius: responsiveHeight(2),
        width: SCREEN_WIDTH / 4,
        height: SCREEN_HEIGHT / 5,
        margin: responsiveHeight(1.7),
    },
    editView: {
        backgroundColor: 'white',
        width: 40, height: 40, borderRadius: 40 / 2,
        alignContent: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        elevation: 10,
        right: -5,

    },
    editViewplus: {
        backgroundColor: '#F44609',
        width: 40, height: 40, borderRadius: 40 / 2,
        alignContent: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        elevation: 10,
        right: -5,

    },
    EditInfo: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 12,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    textViewBarMain: {
        width: responsiveWidth(90),
        height: responsiveHeight(11),
        alignSelf: 'center',
        borderRadius: responsiveWidth(2),
        borderWidth: 0.3,
        borderColor: '#757575',
        backgroundColor: 'white',
        marginTop: responsiveHeight(3),

    },
    textViewBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },
    textView: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        alignSelf: 'center',
        borderRadius: responsiveWidth(2),
        borderWidth: 0.3,
        borderColor: '#757575',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        marginRight: responsiveHeight(2),
    },
    dropicon:
    {
        alignSelf: 'center',
        flexDirection: 'row',
        width: '10%',
    },
    breedtext: {
        color: '#F44609',
        alignSelf: 'center',
        //marginHorizontal:responsiveHeight(1.5),
        padding: responsiveHeight(1.5),
        fontSize: responsiveHeight(2.3)
    },
    secondView: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    secondTextView: {
        color: '#757575',
        alignSelf: 'center',
        padding: responsiveHeight(1.5),
        fontSize: responsiveHeight(2.3)
    },
    secondTextDropView: {
        color: '#757575',
        padding: responsiveHeight(1.5),
        fontSize: responsiveHeight(2.3)
    },
    sliderLabels: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 8
    },

    backgroundSlider: {
        marginTop: responsiveHeight(1),
        width: '100%',
    },
    dropdownIn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchView: {
        width: responsiveWidth(90),
        height: responsiveHeight(24),
        alignSelf: 'center',
        borderRadius: responsiveWidth(2),
        borderTopLeftRadius: responsiveWidth(1),
        borderTopRightRadius: responsiveWidth(1),
        borderWidth: 0.3,
        borderTopWidth: 0,
        borderColor: '#757575',
        backgroundColor: 'white',
        marginTop: -1,
        marginRight: responsiveHeight(2),
        borderTopStartRadius: responsiveWidth(1),
        borderTopEndRadius: responsiveWidth(1),

    },
    switch: {
        alignSelf: 'flex-start',
        marginTop: responsiveHeight(1),
        justifyContent: 'space-between',
        alignContent: 'space-between',

    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#F44609',
        width: responsiveWidth(0.3),
        height: responsiveHeight(5),
        alignSelf: 'center',
        margin: 5,
    },
    textinput: {
        width: '100%',
        //alignSelf: 'center',
        marginHorizontal: responsiveHeight(-1.5),
        padding: responsiveHeight(2),
        fontSize: responsiveHeight(2.3)
    },
    labelText: {
        marginTop: responsiveHeight(1),
        color: 'grey',
        marginHorizontal: responsiveHeight(2.2),
        fontSize: responsiveHeight(3),
    }
});
