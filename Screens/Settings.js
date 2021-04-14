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
import {saveData} from '../Component/firebaseConfig/utility'
const DEMO_OPTIONS_1 = ['Doddles', 'Aussies Doddles', 'Aussies',];
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedvalue: "Doodles",
      title: "Champion",
      isDoodles: true,
      isChampion: true,
      isTri: true,
      isOFA: true,
      isM_m: true,
      isAKC: true,
      isAussie: '',
      isAussieDoodles: '',
      color: "Tri",
      health: "OFA",
      genetics: "m/M",
      Registries: "AKC",

    }
  }

  async componentDidMount(){
    // let data= await saveData ('studs','em3XIwkOXcBbqQz3twqa',{
      // breedvalue: "Doodles",
      // title: "Champion",
      // color: "Tri",
      // health: "OFA",
      // genetics: "m/M",
      // Registries: "AKC",
    // })

  }
  saveSettings= async () => {
   await AsyncStorage.setItem("breedvalue", this.state.breedvalue)
   await AsyncStorage.setItem("title", this.state.title)
   await AsyncStorage.setItem("color", this.state.color)
   await AsyncStorage.setItem("health", this.state.health)
   await AsyncStorage.setItem("genetics", this.state.genetics)
   await  AsyncStorage.setItem("Registries", this.state.Registries)
    this.props.navigation.navigate('Profile')
  }



  myFunction = () => {
    console.log("tetsts ts ")
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

  isChampion = () => {
    this.setState({
      isChampion: !this.state.isChampion,
    })

    if (!this.state.isChampion) {
      this.setState({
        isGCH: false,
        isAgility: false,
        isCh: false,

        title: "Champion",
      })
    }
  }
  isGCH = () => {
    this.setState({
      isGCH: !this.state.isGCH,
    })

    if (!this.state.isGCH) {
      this.setState({
        isChampion: false,
        isAgility: false,
        isCh: false,

        title: "GCH",
      })
    }
  }
  isAgility = () => {
    this.setState({
      isAgility: !this.state.isAgility,
    })

    if (!this.state.isAgility) {
      this.setState({
        isGCH: false,
        isChampion: false,
        isCh: false,

        title: "isAgility",
      })
    }
  }
  isCh = () => {
    this.setState({
      isCh: !this.state.isCh,
    })

    if (!this.state.isCh) {
      this.setState({
        isGCH: false,
        isAgility: false,
        isChampion: false,

        title: "CH",
      })
    }
  }

  isTri = () => {
    this.setState({
      isTri: !this.state.isTri,
    })

    if (!this.state.isTri) {
      this.setState({
        isRed: false,
        isBlack: false,
        isMerle: false,

        color: "Tri",
      })
    }
  }


  isMerle = () => {
    this.setState({
      isMerle: !this.state.isMerle,
    })

    if (!this.state.isMerle) {
      this.setState({
        isRed: false,
        isTri: false,
        isBlack: false,

        color: "Merle",
      })
    }
  }
  isBlack = () => {
    this.setState({
      isBlack: !this.state.isBlack,
    })

    if (!this.state.isBlack) {
      this.setState({
        isRed: false,
        isTri: false,
        isMerle: false,

        color: "Black",
      })
    }
  }
  isRed = () => {
    this.setState({
      isRed: !this.state.isRed,
    })

    if (!this.state.isRed) {
      this.setState({
        isBlack: false,
        isTri: false,
        isMerle: false,

        color: "Red",
      })
    }
  }

  isOFA = () => {
    this.setState({
      isOFA: !this.state.isOFA,
    })
    if (!this.state.isOFA) {
      this.setState({
        isOFAhips: false,
        isOFAelbows: false,
        isEye: false,

        health: "OFA",
      })
    }
  }
  isOFAhips = () => {
    this.setState({
      isOFAhips: !this.state.isOFAhips,
    })
    if (!this.state.isOFAhips) {
      this.setState({
        isOFA: false,
        isOFAelbows: false,
        isEye: false,

        health: "OFA Hips",
      })
    }
  }
  isOFAelbows = () => {
    this.setState({
      isOFAelbows: !this.state.isOFAelbows,
    })
    if (!this.state.isOFAelbows) {
      this.setState({
        isOFAhips: false,
        isOFA: false,
        isEye: false,

        health: "OFA Elbows",
      })
    }
  }
  isEye = () => {
    this.setState({
      isEye: !this.state.isEye,
    })
    if (!this.state.isEye) {
      this.setState({
        isOFAhips: false,
        isOFAelbows: false,
        isOFA: false,

        health: "Eyes",
      })
    }
  }

  isM_m = () => {
    this.setState({
      isM_m: !this.state.isM_m,
    })
    if (!this.state.isM_m) {
      this.setState({
        isM_c: false,
        isMerle: false,
        isb_B: false,

        genetics: "m/M",
      })
    }
  }

  isM_c = () => {
    this.setState({
      isM_c: !this.state.isM_c,
    })
    if (!this.state.isM_c) {
      this.setState({
        isM_m: false,
        isMerle: false,
        isb_B: false,

        genetics: "m/C",
      })
    }
  }
  isMerle = () => {
    this.setState({
      isMerle: !this.state.isMerle,
    })
    if (!this.state.isMerle) {
      this.setState({
        isM_c: false,
        isM_m: false,
        isb_B: false,

        genetics: "Merle",
      })
    }
  }
  isb_B = () => {
    this.setState({
      isb_B: !this.state.isb_B,
    })
    if (!this.state.isb_B) {
      this.setState({
        isM_c: false,
        isMerle: false,
        isM_m: false,

        genetics: "b/B",
      })
    }
  }

  isAKC = () => {
    this.setState({
      isAKC: !this.state.isAKC,
    })
    if (!this.state.isAKC) {
      this.setState({
        isUSASA: false,
        isASCA: false,

        Registries: "AKC",
      })
    }
  }

  isUSASA = () => {
    this.setState({
      isUSASA: !this.state.isUSASA,
    })
    if (!this.state.isUSASA) {
      this.setState({
        isAKC: false,
        isASCA: false,

        Registries: "USASA",
      })
    }
  }
  isASCA = () => {
    this.setState({
      isASCA: !this.state.isASCA,
    })
    if (!this.state.isAKC) {
      this.setState({
        isUSASA: false,
        isAKC: false,

        Registries: "ASCA",
      })
    }
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

    return (
      <SafeAreaView style={{ flex: 1, }}>
        <StatusBar
          backgroundColor="grey"
          barStyle="light-content"
          translucent
        />
        <ScrollView style={{ marginBottom: 10 }} >
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
                    this.saveSettings();
                    
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
                <Text style={styles.secondTextDropView}>Doddles</Text>
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
                <Text style={styles.secondTextView}>{this.state.title}</Text>
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
                  thumbColor={this.state.isChampion ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isChampion}
                  value={this.state.isChampion}
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
                  thumbColor={this.state.isGCH ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isGCH}
                  value={this.state.isGCH}
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
                  thumbColor={this.state.isAgility ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isAgility}
                  value={this.state.isAgility}
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
                  thumbColor={this.state.isCh ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isCh}
                  value={this.state.isCh}
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
                <Text style={styles.secondTextView}>{this.state.color}</Text>
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
                  thumbColor={this.state.isTri ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isTri}
                  value={this.state.isTri}
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
                  thumbColor={this.state.isBlack ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isBlack}
                  value={this.state.isBlack}
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
                  thumbColor={this.state.isMerle ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isMerle}
                  value={this.state.isMerle}
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
                  thumbColor={this.state.isRed ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isRed}
                  value={this.state.isRed}
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
                <Text style={styles.secondTextView}>{this.state.health}</Text>
                <Ionicons name="chevron-down" size={24} color="black"
                  style={{ alignSelf: 'center', marginRight: 5 }} />
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
                  thumbColor={this.state.isOFA ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isOFA}
                  value={this.state.isOFA}
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
                  thumbColor={this.state.isOFAhips ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isOFAhips}
                  value={this.state.isOFAhips}
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
                  thumbColor={this.state.isOFAelbows ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isOFAelbows}
                  value={this.state.isOFAelbows}
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
                  thumbColor={this.state.isEye ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isEye}
                  value={this.state.isEye}
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
                <Text style={styles.secondTextView}>{this.state.genetics}</Text>
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
                  thumbColor={this.state.isM_m ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isM_m}
                  value={this.state.isM_m}
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
                  thumbColor={this.state.isM_c ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isM_c}
                  value={this.state.isM_c}
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
                  thumbColor={this.state.isMerle ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isMerle}
                  value={this.state.isMerle}
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
                  thumbColor={this.state.isb_B ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isb_B}
                  value={this.state.isb_B}
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
                <Text style={styles.secondTextView}>{this.state.Registries}</Text>
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
                  thumbColor={this.state.isAKC ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isAKC}
                  value={this.state.isAKC}
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
                  thumbColor={this.state.isUSASA ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isUSASA}
                  value={this.state.isUSASA}
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
                  thumbColor={this.state.isASCA ? '#F44609' : '#757575'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.isASCA}
                  value={this.state.isASCA}
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
