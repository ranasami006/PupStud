
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
import {connectFirebase} from '../firebaseConfig/config'
export default class AuthLoading extends Component {
  static navigationOptions = {
    header: false,
  }
  componentDidMount = async () => {
    // console.log('10')
    // setTimeout(() => {
        connectFirebase();
      this.props.navigation.navigate('Login');
    // }, 3000);
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <View style={styles.container}>
          <Image source={require('../../assets/1.jpg')} style={{ height: '100%', width: '100%' }} />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});





