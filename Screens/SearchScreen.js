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
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';
import ModalDropdown from 'react-native-modal-dropdown';
const DEMO_OPTIONS_1 = ['Doddles', 'Aussies Doddles', 'Aussies',];

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: 'doodles',
      dropdown_4_options: null,
      dropdown_4_defaultValue: 'loading...',
      breedvalue: '',
      enterColor:'',
      enterTitle:'',
      health_testing:'',
      genetics:'',
      registries:'',
      googleFile:require('../assets/icon/search_24px.png'),
    }
  }
  _dropdown_6_onSelect(idx, value) {
    this.setState({
      breedvalue: value,
    })
  }
  render() {
    //const breedvalue = this.state.dropdown_6_icon_heart ? require('../assets/icon/icons8-facebook-f1.png') : require('../assets/icon/icons8-google1.png');
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, padding: 16 }}>
          <View style={styles.textView}>
            <View style={styles.textView}>

              <View style={styles.dropicon}>
                <ModalDropdown style={styles.dropdown_2}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownStyle={styles.dropdown_2_dropdown}
                  options={DEMO_OPTIONS_1}
                  onDropdownWillShow={() => this.setState({ breedvalue: '' })}
                  onSelect={(idx, value) => this._dropdown_6_onSelect(idx, value)}>
                  <View style={styles.dropdownIn}>
                    <Text style={styles.breedtext}>Select Breeds</Text>
                    <AntDesign name="down" size={18} color='#F44609' />
                  </View>
                </ModalDropdown>
              </View>
              <View style={styles.buttonIconSeparatorStyle} />

              <Text style={styles.breedvalue}>{this.state.breedvalue}</Text>


            </View>
            <Image
              source={require('../assets/icon/search_24px.png')}
              style={styles.icon}></Image>
          </View>


          <View style={[styles.textView, { marginTop: responsiveHeight(3) }]}>

            <View style={styles.dropicon}>
              <Text style={styles.breedtext}>Enter title</Text>
            </View>
            <View style={styles.buttonIconSeparatorStyle} />

            <TextInput
              style={styles.textinput}
              placeholder={''}
              placeholderTextColor={'grey'}
              // onSubmitEditing={() => this._password.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              value={this.state.enterTitle}
              onChangeText={(text) => {
                this.setState({ enterTitle: text });
              }}
            />


          </View>

          <View style={[styles.textView, { marginTop: responsiveHeight(3) }]}>

            <View style={styles.dropicon}>
              <Text style={styles.breedtext}>Enter Color</Text>
            </View>
            <View style={styles.buttonIconSeparatorStyle} />

            <TextInput
              style={styles.textinput}
              placeholder={''}
              placeholderTextColor={'grey'}
              // onSubmitEditing={() => this._password.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              value={this.state.enterColor}
              onChangeText={(text) => {
                this.setState({ enterColor: text });
              }}
            />


          </View>
          <View style={[styles.textView, { marginTop: responsiveHeight(3) }]}>

            <View style={styles.dropicon}>
              <Text style={styles.breedtext}>Health Testing</Text>
            </View>
            <View style={styles.buttonIconSeparatorStyle} />

            <TextInput
              style={styles.textinput}
              placeholder={''}
              placeholderTextColor={'grey'}
              // onSubmitEditing={() => this._password.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              value={this.state.health_testing}
              onChangeText={(text) => {
                this.setState({ health_testing: text });
              }}
            />


          </View>
          <View style={[styles.textView, { marginTop: responsiveHeight(3) }]}>

            <View style={styles.dropicon}>
              <Text style={styles.breedtext}>Genetics</Text>
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
          <View style={[styles.textView, { marginTop: responsiveHeight(3) }]}>

            <View style={styles.dropicon}>
              <Text style={styles.breedtext}>Registries</Text>
            </View>
            <View style={styles.buttonIconSeparatorStyle} />

            <TextInput
              style={styles.textinput}
              placeholder={''}
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
        <View style={{alignItems:'center'}}>
          <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={()=>{this.props.navigation.navigate("Home")}}
          >
           <Image
              source={this.state.googleFile} 
              style={styles.buttonImageIconStyle}></Image>
         
          <Text style={styles.buttonTextStyle}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
        </View>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  buttonFacebookStyle: {
    flexDirection: 'row',
     justifyContent:'center',
     alignContent:'center',
    height: responsiveHeight(6),
    width: responsiveWidth(30),
    borderRadius: responsiveWidth(2),
    borderWidth:1,
    borderColor:'#F44609',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: responsiveWidth(8),
    elevation:1,
    //padding: responsiveWidth(5),
  },
  buttonTextStyle: {
    //color: '#fff',
    //marginBottom: 4,
    //marginLeft: responsiveHeight(4),
    padding:responsiveHeight(1),
    textAlign:'center',
    fontSize:responsiveFontSize(2.2)
  },
  buttonImageIconStyle: {
    aspectRatio:1,
    height: 25,
    width: 25,
    //resizeMode: 'stretch',
  },
  textView1: {
    width: responsiveWidth(12),
    height: responsiveHeight(7),
    flexDirection: 'row',
  },
  textView: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    alignSelf: 'center',
    borderRadius: responsiveWidth(2),
    borderWidth: 0.5,
    borderColor: '#757575',
    flexDirection: 'row',
  },
  breedtext: {
    color: '#F44609',
    alignSelf: 'center',
   // marginLeft:responsiveHeight(1.5),
    padding: responsiveHeight(1.5),
    fontSize: responsiveHeight(2)
  },
  breedvalue: {
    alignSelf: 'center',
    marginHorizontal: responsiveHeight(-1.5),
    padding: responsiveHeight(2),
    fontSize: responsiveHeight(2.3)
  },
  dropicon:
  {
    alignSelf: 'center',
    flexDirection: 'row',
    width: responsiveWidth(35),

  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#F44609',
    width: responsiveWidth(0.3),
    height: responsiveHeight(5),
    alignSelf: 'center',
    margin: 5,
  },
  dropdown_2: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  dropdownIn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown_3_dropdownTextStyle: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: responsiveFontSize(2),
  },
  dropdown_2_dropdown: {
    width: responsiveWidth(40),
    height: 200,
    borderWidth: 2,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginTop: -25,
  },
  icon: {
    aspectRatio: 1,
    width: responsiveWidth(7),
    height: responsiveWidth(7),

    alignSelf: 'center',
    marginHorizontal: responsiveWidth(-10),


  },
  textinput: {
    width: responsiveWidth(33),
    alignSelf: 'center',
    marginHorizontal: responsiveHeight(-1.5),
    padding: responsiveHeight(2),
    fontSize: responsiveHeight(2.3)
  },
  

});
