import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { MaterialIcons,Entypo } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import  {signIn} from '../firebaseConfig/firebaseFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { connectFirebase } from "../firebaseConfig/config";
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    loader: false,
    secured: true,
    facebookFile:require('../../assets/icon/icons8-facebook-f1.png'),
    googleFile:require('../../assets/icon/icons8-google1.png'),
  };
  async componentDidMount(){
    //connectFirebase();
  }
 async LoginFn(){
   let success= await signIn(this.state.email,this.state.password);
   if(success){
    AsyncStorage.setItem("breedvalue", "Doodles")
    AsyncStorage.setItem("title", "Champion")
    AsyncStorage.setItem("color", "Tri")
    AsyncStorage.setItem("health", "OFA")
    AsyncStorage.setItem("genetics", "m/M")
    AsyncStorage.setItem("Registries", "AKC")
    this.props.navigation.navigate('TabBar', { screen: 'Home' });
   }
   
 }
  async ValidationFn() {
    this.setState({ loader: true,ErrorMessege:'' });
    let TempCheck = await this.CheckValidateFn();

    switch (TempCheck) {
      case 0:
        this.LoginFn();
        break;
      case 1:
        this.setState({ loader: false });
       // alert(this.state.ErrorMessege);
        break;
      default:
        break;
    }
  }
  async CheckValidateFn() {
    //EmailCheck
    let reg2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg2.test(this.state.email) === false) {
      console.log('Email is Not Correct');
      this.state.email !== undefined && this.state.email !== ''
        ? this.setState({ ErrorMessege: 'Please enter proper Email Id' })
        : this.setState({ ErrorMessege: 'Email cannot be empty' });
      // this.setState({ email: text })
      return 1;
    }

    let reg1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (reg1.test(this.state.password) === false) {
      console.log('UserName is Not Correct');
      this.state.password === ''
        ? this.setState({ ErrorMessege: 'Password cannot Not be empty' })
        : this.state.password.length > 7
          ? this.setState({ ErrorMessege: 'Please enter proper Password that contains at least one letter, one number and one special character ' })
          : this.setState({
            ErrorMessege: 'Password should be atleast 8 characters!',
          });
      // this.setState({ email: text })
      return 1;
    }
    return 0;
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#F44609"
          barStyle="light-content"
          translucent
        />
        <ScrollView style={{marginBottom:10}}>
        <View style={styles.header}>
        <Text style={styles.headertext}>PupStud</Text>
          {/* <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <MaterialIcons
              name={'keyboard-arrow-left'}
              color={'#4f95e0'}
              size={responsiveWidth(9)}
            />
          </TouchableOpacity> */}
        </View>
        
        <Text style={styles.headertext1}>Login</Text>
        
        <View style={styles.bottomView}>
          
        
            <TextInput
              style={styles.textinput}
              placeholder={'Email'}
              placeholderTextColor={'grey'}
              onSubmitEditing={() => this._password.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              value={this.state.email}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />
                   
            <TextInput
              ref={(input) => this._password = input}

              style={styles.textinput}
              secureTextEntry={this.state.secured}
              placeholder={'password'}
              placeholderTextColor={'grey'}
              value={this.state.password}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
            />
          <TouchableOpacity  onPress={() => {
           
            this.props.navigation.navigate('SignUp');
          }}>
          <Text style={{textAlign:'right',color:'white',textDecorationLine: 'underline',fontSize:responsiveFontSize(1.5)}}>Don't have an account </Text>   
          </TouchableOpacity>
          <Text style={{textAlign:'center',color:'#220764',fontSize:responsiveFontSize(2)}}>{this.state.ErrorMessege}</Text>  
        </View>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            this.ValidationFn();
            // this.props.navigation.navigate('Tab');
          }}>
          {
            this.state.loader ?
              <ActivityIndicator size={'small'} />
              :
              <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text>
          }

        </TouchableOpacity>
        <View style={styles.textView}>
        <Text style={styles.orText}>OR</Text>   
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
           <Image
              source={this.state.googleFile} 
              style={styles.buttonImageIconStyle}></Image>
         
          <Text style={styles.buttonTextStyle}>
            Login With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
           <Image
              source={this.state.facebookFile} 
              style={styles.buttonImageIconStyle}></Image>
         
          <Text style={styles.buttonTextStyle}>
            Login With Facebook
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F44609',
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    // alignContent:'space-between',
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    borderRadius: responsiveWidth(20),
    borderWidth:0.5,
    borderColor:'white',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: responsiveWidth(3),
    padding: responsiveWidth(5),
  },
  buttonImageIconStyle: {
    //padding: 10,
    //margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    //marginBottom: 4,
    marginLeft: responsiveHeight(4),
    textAlign:'center',
    fontSize:responsiveFontSize(1.7)
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeight(15),
    marginTop:responsiveHeight(10)
},
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: '#4f95e0',
  },
  text1: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: '#4f95e0',
  },
  headertext: {
    fontSize: responsiveFontSize(4),
    //fontWeight: 'bold',
    alignSelf: 'center',
    color:'white'
  },
  headertext1: {
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    marginTop: responsiveWidth(1),
  },
  bottomView: {
    //height: responsiveHeight(32),
    width: responsiveWidth(90),
    alignSelf: 'center',
    //borderRadius: responsiveWidth(2),
    //backgroundColor: '#fff',
    elevation: 1,
    marginTop: responsiveWidth(5),
  },
  label: {
    marginLeft: responsiveWidth(5),
    marginTop: responsiveWidth(5),
    fontSize: responsiveFontSize(1.8),
  },
  textInputContainer: {
    borderBottomWidth: responsiveWidth(0.3),
    borderColor: 'grey',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textinput:{
     backgroundColor:"white",
     borderRadius:45,
     height:responsiveHeight(8),
     margin:responsiveHeight(1), 
     padding:responsiveHeight(2),
  },

  textView: {
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveWidth(5),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },

  button1: {
    height: responsiveHeight(8),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(20),
    borderWidth:1,
    borderColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#220764',
    marginTop: responsiveWidth(1),
  },
  buttonText: {
    fontSize: responsiveFontSize(1.8),
    color: 'grey',
    fontWeight: 'bold',
  },
  orText:{
    color: '#fff',
    textAlign:'center',
    fontSize: responsiveFontSize(3.4),
  }
});
