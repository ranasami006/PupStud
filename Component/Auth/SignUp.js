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
  AsyncStorage,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { MaterialIcons,Entypo } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import {signUp} from '../firebaseConfig/firebaseFunctions'
export default class Login extends Component {
  state = {
    firstname:'',
    lastname:'',
    email: '',
    password: '',
    confirmpassword:'',
    loader: false,
    secured: true,
    facebookFile:require('../../assets/icon/icons8-facebook-f1.png'),
    googleFile:require('../../assets/icon/icons8-google1.png'),
  };
 async SignupFn(){
   let success= await signUp(this.state.firstname,this.state.lastname,this.state.email,this.state.password);
   if(success){
    this.props.navigation.navigate('Login');
   }
   
 }
  async ValidationFn() {
    this.setState({ loader: true,ErrorMessege:'' });
    let TempCheck = await this.CheckValidateFn();

    switch (TempCheck) {
      case 0:
        this.SignupFn();
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
    let reg3 = /^[a-zA-Z\-]+$/;
        if (reg3.test(this.state.firstname) === false) {
            this.state.firstname !== undefined && this.state.firstname !== ''
                ? this.setState({
                    ErrorMessege: 'First name can only contain letters of the alphabets',
                })
                : this.setState({ ErrorMessege: 'First name cannot be empty' });
            return 1;
        }
        let reg4 = /^[a-zA-Z\-]+$/;
        if (reg4.test(this.state.lastname) === false) {
            this.state.lastname !== undefined && this.state.lastname !== ''
                ? this.setState({
                    ErrorMessege: 'Last name can only contain letters of the alphabets',
                })
                : this.setState({ ErrorMessege: 'Last name cannot be empty' });
            return 1;
        }

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
    if(this.state.password!== this.state.confirmpassword){
      this.setState({
        ErrorMessege: 'Password not match!',
      });
      return 1;
    }

    return 0;
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="light-content"
          translucent
        />
        <ScrollView style={{marginBottom:4}}>
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
        
        <Text style={styles.headertext1}>Sign Up</Text>
        
        <View style={styles.bottomView}>
          
        
            <TextInput
              style={styles.textinput}
              placeholder={'First Name'}
              placeholderTextColor={'grey'}
              onSubmitEditing={() => this._password.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              value={this.state.firstname}
              onChangeText={(text) => {
                this.setState({ firstname: text });
              }}
            />
             <TextInput
              style={styles.textinput}
              placeholder={'Last Name'}
              placeholderTextColor={'grey'}
              onSubmitEditing={() => this._password.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              value={this.state.lastname}
              onChangeText={(text) => {
                this.setState({ lastname: text });
              }}
            />
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
              style={styles.textinput}
              secureTextEntry={this.state.secured}
              placeholder={'Password'}
              placeholderTextColor={'grey'}
              onSubmitEditing={() => this._password.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              value={this.state.password}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
            />
           
         
         
         
            <TextInput
              ref={(input) => this._password = input}

              style={styles.textinput}
              secureTextEntry={this.state.secured}
              placeholder={'Confirm Password'}
              placeholderTextColor={'grey'}
              value={this.state.confirmpassword}
              onChangeText={(text) => {
                this.setState({ confirmpassword: text });
              }}
            />
          <TouchableOpacity  onPress={() => {
           
            this.props.navigation.navigate('Login');
          }}>
          <Text style={{textAlign:'right',color:'#220764',textDecorationLine: 'underline',fontSize:responsiveFontSize(1.5)}}>Already have an account </Text>   
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
              <Text style={[styles.buttonText, { color: '#fff' }]}>Sign Up</Text>
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
    backgroundColor: '#fff',
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
    backgroundColor: '#F44609',
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
    marginTop:responsiveHeight(3)
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
    color:'#F44609'
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
     borderWidth:responsiveWidth(0.13)
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
