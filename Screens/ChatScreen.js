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
  ScrollView,
  FlatList,
} from 'react-native';
import 'firebase/firestore';

import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header, Avatar, colors } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  getData,
  addToArray,
  saveData,
  saveInitialData

} from '../Component/firebaseConfig/utility';
import { Ionicons } from '@expo/vector-icons';
export default class ChatScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item: this.props.route.params.item,
      data: null,
      friendID: '',
      friendName: 'Product Owner',
      current_user: '',
      messages: [],
      isConnected: '',
    }
  }
  componentDidMount = async () => {
     let userId = await AsyncStorage.getItem('Token');
    let userData =await getData('users',this.state.item.likerId?this.state.item.likerId:this.state.item.id);
    console.log("Lahore",userData)
 
    await this.setState({
      current_user: userId,
      friendID:userData.id,
    });
    await this.getMessages();
    this.focusListener = this.props.navigation.addListener('willFocus', () => {
      this._handleStateChange();
    });
  };

  getMessages = async () => {
    let messages = await getData(
      'chats',
      this.state.current_user,
      this.state.friendID,
    );

    if (messages) {
      await this.setState({ messages: messages });
    } else {
      return 0;
    }
    let that = this;
    const dbh = firebase.firestore();
    await dbh
      .collection('chats')
      .doc(this.state.current_user)
      .onSnapshot(async doc => {
        that.setState({ messages: doc.data()[this.state.friendID].reverse() });
      });
  };
  async onSend(messages = []) {

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    messages[0].createdAt = Date.parse(messages[0].createdAt);
    //messages[0].unssen = true;
    console.log("TETST SS TS STS TS ")
    await addToArray(
      'chats',
      this.state.current_user,
      this.state.friendID,
      messages[0],
    );
    messages[0].user._id = 2;
    await addToArray(
      'chats',
      this.state.friendID,
      this.state.current_user,
      messages[0],
    );
    // await saveData('notifications', this.state.friendID, {
    //   createdAt: messages[0].createdAt,
    //   text: messages[0].text,
    //   _id: messages[0].user._id,
    //   senderId: this.state.current_user,
    //   reciverId: this.state.friendID
    // })
    // messages[0].user._id = 1;

    // await upDateData('chats', this.state.friendID, {
    //   unseen: true,
    // });
    await addToArray(
      'chats',
      this.state.friendID,
      'userids',
      this.state.current_user,
    );

    await addToArray(
      'users',
      this.state.current_user,
      'chatted',
      this.state.friendID,
    );
    await addToArray(
      'users',
      this.state.friendID,
      'chatted',
      this.state.current_user,
    );
    console.log("TETST SS TS STS TS ")
  }


  render() {
    const item = this.props.route.params.item;
    return (
      <>
        <View style={{ marginTop: Constants.statusBarHeight, backgroundColor: 'grey' }}>
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
                <Ionicons name="chevron-back-outline" size={34}
                  style={{ marginTop: -10 }}
                  color="#757575" />
              </TouchableOpacity>
            }
            centerComponent={
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: item.uri?item.uri:item.image }}
                  style={{
                    width: 50, height: 50,
                    borderRadius: 50 / 2, marginTop: -25
                  }}></Image>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "700" }}>
                  {item.name?item.name:item.firstname}
                </Text>
              </View>

            }



            statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: '#757575' }}
            containerStyle={{ borderBottomColor: '#85106a', borderBottomWidth: 0, color: 'red' }}
            style={{ backgroundColor: 'red', elevation: 5 }}
          />
        </View>
        <GiftedChat
          messages={this.state.messages}
          isAnimated={true}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </>
    );
  }


}