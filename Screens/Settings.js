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
  ScrollView
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Header, Avatar, colors } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Ionicons } from '@expo/vector-icons';
const DEMO_OPTIONS_1 = ['Doddles', 'Aussies Doddles', 'Aussies',];
export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedvalue: '',
      isDoodles: '',
      isAussie: '',
      isAussieDoodles: '',
    }
  }
  myFunction = () => {
    console.log("tetsts ts ")
  }
  _dropdown_6_onSelect(idx, value) {
    this.setState({
      breedvalue: value,
    })
  }
  isDoodles = () => {
    this.setState({
      isDoodles: !this.state.isDoodles,
    })
  }
  isAussie = () => {
    this.setState({
      isAussie: !this.state.isAussie,
    })
  }
  isAussieDoodles = () => {
    this.setState({
      isAussieDoodles: !this.state.isAussieDoodles,
    })
  }
  showBreed = () => {
    this.setState({
      isBreed: !this.state.isBreed,
     
    })
  }
  showTitle = () => {
    this.setState({
      isTitle: !this.state.isTitle,    
    })
  }
  showColor = () => {
    this.setState({
      isColor: !this.state.isColor,    
    })
  }
  showHealth = () => {
    this.setState({
      isHealth: !this.state.isHealth,    
    })
  }
  showGenetics = () => {
    this.setState({
      isGenetics: !this.state.isGenetics,    
    })
  }
  showRegistries = () => {
    this.setState({
      isRegistries: !this.state.isRegistries,    
    })
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
        <ScrollView style={{marginBottom:10}} >
          <View style={{ marginTop: Constants.statusBarHeight, backgroundColor: 'grey' }}>
            <Header
              backgroundColor={'white'}
              leftComponent={
                <TouchableOpacity 
                onPress={() => {
                  this.props.navigation.goBack();
              }}
                style={{
                  alignContent: 'flex-start',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}>
                  <Text style={{
                    color: '#757575',
                    fontSize: responsiveFontSize(2.5),
                    alignSelf: 'center', marginTop: -10
                  }}>
                    cancel</Text>
                </TouchableOpacity>
              }
              centerComponent={{ text: 'Settings', style: { color: '#757575', fontSize: responsiveFontSize(3), fontWeight: 'bold', alignSelf: 'center', marginTop: -15 } }}

              rightComponent={
                <TouchableOpacity 
                onPress={() => {
                  this.props.navigation.navigate("Profile");
              }}
                style={{
                  alignContent: 'flex-start',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}>
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
          </View>
          <View>
            <Text style={{
              padding: responsiveWidth(3), fontSize: responsiveFontSize(2.3),
              color: '#757575', fontWeight: 'bold'
            }}>Discovery Settings</Text>

          </View>

          <View style={[styles.textView, { marginTop: responsiveHeight(3) }]}>
            <Text style={styles.breedtext}>Location</Text>
            <View style={styles.secondView}>
              <Text style={styles.secondTextView}>My Current Location</Text>
              <Ionicons name="chevron-forward" size={24} color="black" style={{ alignSelf: 'center', marginRight: 5 }} />
            </View>
          </View>
          <View style={styles.textViewBarMain}>
            <View style={[styles.textViewBar, { marginTop: responsiveHeight(0) }]}>
              <Text style={[styles.breedtext, { alignSelf: 'flex-start', }]}>Maximum Distance</Text>
              <Text style={[styles.secondTextView, { alignSelf: 'flex-start', }]}>160 Km</Text>
            </View>
            <Slider style={styles.backgroundSlider} minimumValue={this.min} maximumValue={this.max} thumbTintColor="white"
              minimumTrackTintColor={'#F44609'} maximumTrackTintColor="#757575" />
          </View>

          <TouchableOpacity style={[styles.textView, { marginTop: responsiveHeight(3) }]}
            onPress={() => this.showBreed()}
          >
            <Text style={styles.breedtext}>Show Breed type</Text>
            <View style={styles.secondView}>

              <View style={styles.dropdownIn}>
                <Text style={styles.secondTextView}>Doddles</Text>
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

          <TouchableOpacity style={[styles.textView, { marginTop: responsiveHeight(3) }]}
            onPress={() => this.showTitle()}
          >
            <Text style={styles.breedtext}>Titles</Text>
            <View style={styles.secondView}>

              <View style={styles.dropdownIn}>
                <Text style={styles.secondTextView}>Champion</Text>
                <Ionicons name="chevron-down" size={24} color="black" style={{ alignSelf: 'center', marginRight: 5 }} />
              </View>

            </View>
          </TouchableOpacity>

          {this.state.isTitle ? (
            <View style={styles.switchView}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>Champion</Text>
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
                <Text style={styles.secondTextDropView}>GCH</Text>
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
                <Text style={styles.secondTextDropView}>Agility</Text>
                <Switch
                  trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                  thumbColor={this.state.isAussie ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isAussie}
                  value={this.state.isAussie}
                  style={styles.switch}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>CH</Text>
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

          <TouchableOpacity style={[styles.textView, { marginTop: responsiveHeight(3) }]}
            onPress={() => this.showColor()}
          >
            <Text style={styles.breedtext}>Color</Text>
            <View style={styles.secondView}>

              <View style={styles.dropdownIn}>
                <Text style={styles.secondTextView}>Tri</Text>
                <Ionicons name="chevron-down" size={24} color="black" style={{ alignSelf: 'center', marginRight: 5 }} />
              </View>

            </View>
          </TouchableOpacity>

          {this.state.isColor ? (
            <View style={styles.switchView}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>Tri</Text>
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
                <Text style={styles.secondTextDropView}>Tri</Text>
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
                <Text style={styles.secondTextDropView}>Black</Text>
                <Switch
                  trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                  thumbColor={this.state.isAussie ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isAussie}
                  value={this.state.isAussie}
                  style={styles.switch}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>Merle</Text>
                <Switch
                  trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                  thumbColor={this.state.isAussie ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isAussie}
                  value={this.state.isAussie}
                  style={styles.switch}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>Red tri</Text>
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

<TouchableOpacity style={[styles.textView, { marginTop: responsiveHeight(3) }]}
            onPress={() => this.showHealth()}
          >
            <Text style={styles.breedtext}>Health Testing</Text>
            <View style={styles.secondView}>

              <View style={styles.dropdownIn}>
                <Text style={styles.secondTextView}>OFA</Text>
                <Ionicons name="chevron-down" size={24} color="black" style={{ alignSelf: 'center', marginRight: 5 }} />
              </View>

            </View>
          </TouchableOpacity>

          {this.state.isHealth ? (
            <View style={styles.switchView}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>OFA</Text>
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
                <Text style={styles.secondTextDropView}>OFA Hips</Text>
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
                <Text style={styles.secondTextDropView}>OFA Elbows</Text>
                <Switch
                  trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                  thumbColor={this.state.isAussie ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isAussie}
                  value={this.state.isAussie}
                  style={styles.switch}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>Eyes</Text>
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
          <TouchableOpacity style={[styles.textView, { marginTop: responsiveHeight(3) }]}
            onPress={() => this.showGenetics()}
          >
            <Text style={styles.breedtext}>Genetics</Text>
            <View style={styles.secondView}>

              <View style={styles.dropdownIn}>
                <Text style={styles.secondTextView}>m/M</Text>
                <Ionicons name="chevron-down" size={24} color="black" style={{ alignSelf: 'center', marginRight: 5 }} />
              </View>

            </View>
          </TouchableOpacity>

          {this.state.isGenetics ? (
            <View style={styles.switchView}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>m/M</Text>
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
                <Text style={styles.secondTextDropView}>m/C</Text>
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
                <Text style={styles.secondTextDropView}>Merle</Text>
                <Switch
                  trackColor={{ false: '#d3d3d3', true: '#ffcccb' }}
                  thumbColor={this.state.isAussie ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isAussie}
                  value={this.state.isAussie}
                  style={styles.switch}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>b/B</Text>
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

<TouchableOpacity style={[styles.textView, { marginTop: responsiveHeight(3) }]}
            onPress={() => this.showRegistries()}
          >
            <Text style={styles.breedtext}>Registries</Text>
            <View style={styles.secondView}>

              <View style={styles.dropdownIn}>
                <Text style={styles.secondTextView}>AKC</Text>
                <Ionicons name="chevron-down" size={24} color="black" style={{ alignSelf: 'center', marginRight: 5 }} />
              </View>

            </View>
          </TouchableOpacity>

          {this.state.isRegistries ? (
            <View style={styles.switchView}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignContent: 'space-between',
              }}>
                <Text style={styles.secondTextDropView}>AKC</Text>
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
                <Text style={styles.secondTextDropView}>USASA</Text>
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
                <Text style={styles.secondTextDropView}>ASCA</Text>
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


        </ScrollView>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
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
  },
  dropicon:
  {
    alignSelf: 'center',
    flexDirection: 'row',
    width: responsiveWidth(33),
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

  },
  switch: {
    alignSelf: 'flex-start',
    marginTop: responsiveHeight(1),
    justifyContent: 'space-between',
    alignContent: 'space-between',

  },
});
