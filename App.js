import * as React from 'react';
import { Image, ImagePickerIOS, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { responsiveWidth, responsiveHeight, responsiveFontSize } 
from 'react-native-responsive-dimensions';
import Home from './Screens/Home'
import Profile from './Screens/Profile'
import ChatDetail from './Screens/ChatDetail'
import ChatScreen from './Screens/ChatScreen'
import ChatRequest from './Screens/ChatRequest'
import SearchScreen from './Screens/SearchScreen'
import SearchResult from './Screens/SearchResult'
import Login from './Component/Auth/Login'
import Settings from './Screens/Settings'
import Addmedia from './Screens/AddMedia'
import SignUp from './Component/Auth/SignUp'
import AuthLoading from './Component/Auth/AuthLoading'
import Detail from './Screens/Detail'
import EditInfo from './Screens/EditInfo'


import Constants from 'expo-constants'
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const OverViewStack = createStackNavigator();
const Main = () => {
  return (

    <MainStack.Navigator initialRouteName="AuthLoading" screenOptions={{ headerShown: false, gestureEnabled: false }} >
      <MainStack.Screen name="TabBar" component={TabBar} />
      <MainStack.Screen name="AuthLoading" component={AuthLoading} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="Settings" component={Settings} />
      <MainStack.Screen name="Detail" component={Detail} />
      <MainStack.Screen name="EditInfo" component={EditInfo} />
      <MainStack.Screen name="Addmedia" component={Addmedia} />
      <MainStack.Screen name="ChatScreen" component={ChatScreen} />
    </MainStack.Navigator>
  );

}



Main.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.key > 0) {
    drawerLockMode = 'locked-closed';
  }

  return {
    drawerLockMode,
  };
};

const Chats = () => {
  return (
 <MainStack.Navigator initialRouteName="ChatDetail" screenOptions={{ headerShown: false, gestureEnabled: false }} >
  <MainStack.Screen name="ChatDetail" component={ChatDetail} />
  {/* <MainStack.Screen name="ChatScreen" component={ChatScreen} /> */}
  <MainStack.Screen name="ChatRequest" component={ChatRequest} />
</MainStack.Navigator>
  );
}
const Search=() =>{
  return (
  <MainStack.Navigator initialRouteName="SearchScreen" screenOptions={{ headerShown: false, gestureEnabled: false }} >
  <MainStack.Screen name="SearchScreen" component={SearchScreen} />
  <MainStack.Screen name="SearchResult" component={SearchResult} />
</MainStack.Navigator>
  );
}
const TabBar = () => {
  return (
    <Tab.Navigator
    swipeEnabled={true}  
    tabBarOptions={{
        showLabel: false,
        showIcon: true,
        activeTintColor: 'red',
        swipeEnabled: false, 
         style: {
          height: 70,
          marginTop: Constants.statusBarHeight,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          elevation: 20,
          shadowOffset: {
            width: 20, height: 20 // for iOS
          },

          borderColor: 'transparent'
        },
        indicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require('./assets/icon/compare_24px.png')}
                style={styles.icon}></Image>
            ) : (
              <Image
                source={require('./assets/icon/compare_24p.png')}
                style={styles.icon}></Image>
            ),
        }}
      />
      <Tab.Screen name="SearchScreen" component={Search}
        options={{
          tabBarLabel: 'Homescreen',
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require('./assets/icon/Search.png')}
                style={styles.icon}></Image>
            ) : (
              <Image
                source={require('./assets/icon/search_24px.png')}
                style={styles.icon}></Image>
            ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require('./assets/icon/person_outline_24px.png')}
                style={styles.icon}></Image>
            ) : (
              <Image
                source={require('./assets/icon/person_red.png')}
                style={styles.icon}></Image>
            ),
        }}
      />
      <Tab.Screen name="ChatDetail" component={Chats}
        options={{
          tabBarLabel: 'ChatDetail',
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require('./assets/icon/Vector.png')}
                style={styles.icon}></Image>
            ) : (
              <Image
                source={require('./assets/icon/Chat.png')}
                style={styles.icon}></Image>
            ),
        }}
      />
    </Tab.Navigator>

  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main"
        edgeWidth={0}
        statusBarAnimation={'slide'}
        hideStatusBar={false}
        drawerStyle={{
          backgroundColor: '#fff',
          width: responsiveWidth(70),
          borderTopRightRadius: 5,
        }}>

        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="TabBar" component={TabBar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  icon: {
    aspectRatio: 1,
    height: '120%',
    marginTop: responsiveWidth(2)
  },
})