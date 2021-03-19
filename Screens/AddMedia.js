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
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { MaterialIcons,Entypo } from '@expo/vector-icons';
import { Header, Avatar, colors } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
export default class AddMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1:'',
      image2:'',
      image3:'',
      image4:'',
      image5:'',
      image6:'',
      image7:'',
      image8:'',
      image9:'',
    }
  }

async componentDidMount(){
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

imagePicker1= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image1:result.uri});
  }
}
imagePicker2= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image2:result.uri});
  }
}
imagePicker3= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image3:result.uri});
  }
}
imagePicker4= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image4:result.uri});
  }
}
imagePicker5= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image5:result.uri});
  }
}
imagePicker6= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image6:result.uri});
  }
}
imagePicker7= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image7:result.uri});
  }
}
imagePicker8= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image8:result.uri});
  }
}
imagePicker9= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  
  //console.log(result);

  if (!result.cancelled) {
    this.setState({image9:result.uri});
  }
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
                  <Text style={{
                    color: '#757575',
                    fontSize: responsiveFontSize(2.5),
                    alignSelf: 'center', marginTop: -10
                  }}>
                    cancel</Text>
                </TouchableOpacity>
              }
              centerComponent={{ text: 'Add Media', style: { color: '#757575', fontSize: responsiveFontSize(3), fontWeight: 'bold', alignSelf: 'center', marginTop: -15 } }}

              rightComponent={
                <TouchableOpacity style={{
                  alignContent: 'flex-start',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}
                onPress={() => {
                  this.props.navigation.navigate("Profile");
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
          </View>

          <View style={styles.bottomView}>
              <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker1()}>
                
                  {this.state.image1?(
                  <>
                 <Image source={{uri: this.state.image1}}
                  style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                  >
                   
                </Image> 
                 <View style={styles.editView}>
                
                 <MaterialIcons name="edit" size={30} color="#F44609" />
                
                </View>
                </>
                ):
                
                <View style={styles.editViewplus}>
                
                <Entypo name="plus" size={30} color="white" />  
                 </View>
                }
                
              </TouchableOpacity>
             <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker2()}>
                
                  {this.state.image2?(
                  <>
                 <Image source={{uri: this.state.image2}}
                  style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                  >
                   
                </Image> 
                 <View style={styles.editView}>
                
                 <MaterialIcons name="edit" size={30} color="#F44609" />
                
                </View>
                </>
                ):
                
                <View style={styles.editViewplus}>
                
                <Entypo name="plus" size={30} color="white" />  
                 </View>
                }
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker3()}>
                
                {this.state.image3?(
                <>
               <Image source={{uri: this.state.image3}}
                style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                >
                 
              </Image> 
               <View style={styles.editView}>
              
               <MaterialIcons name="edit" size={30} color="#F44609" />
              
              </View>
              </>
              ):
              
              <View style={styles.editViewplus}>
              
              <Entypo name="plus" size={30} color="white" />  
               </View>
              }
              
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView}>
          <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker4()}>
                
                {this.state.image4?(
                <>
               <Image source={{uri: this.state.image4}}
                style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                >
                 
              </Image> 
               <View style={styles.editView}>
              
               <MaterialIcons name="edit" size={30} color="#F44609" />
              
              </View>
              </>
              ):
              
              <View style={styles.editViewplus}>
              
              <Entypo name="plus" size={30} color="white" />  
               </View>
              }
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker5()}>
                
                {this.state.image5?(
                <>
               <Image source={{uri: this.state.image5}}
                style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                >
                 
              </Image> 
               <View style={styles.editView}>
              
               <MaterialIcons name="edit" size={30} color="#F44609" />
              
              </View>
              </>
              ):
              
              <View style={styles.editViewplus}>
              
              <Entypo name="plus" size={30} color="white" />  
               </View>
              }
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker6()}>
                
                {this.state.image6?(
                <>
               <Image source={{uri: this.state.image6}}
                style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                >
                 
              </Image> 
               <View style={styles.editView}>
              
               <MaterialIcons name="edit" size={30} color="#F44609" />
              
              </View>
              </>
              ):
              
              <View style={styles.editViewplus}>
              
              <Entypo name="plus" size={30} color="white" />  
               </View>
              }
              
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView}>
          <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker7()}>
                
                {this.state.image7?(
                <>
               <Image source={{uri: this.state.image7}}
                style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                >
                 
              </Image> 
               <View style={styles.editView}>
              
               <MaterialIcons name="edit" size={30} color="#F44609" />
              
              </View>
              </>
              ):
              
              <View style={styles.editViewplus}>
              
              <Entypo name="plus" size={30} color="white" />  
               </View>
              }
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker8()}>
                
                {this.state.image8?(
                <>
               <Image source={{uri: this.state.image8}}
                style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                >
                 
              </Image> 
               <View style={styles.editView}>
              
               <MaterialIcons name="edit" size={30} color="#F44609" />
              
              </View>
              </>
              ):
              
              <View style={styles.editViewplus}>
              
              <Entypo name="plus" size={30} color="white" />  
               </View>
              }
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageView} onPress={()=>this.imagePicker9()}>
                
                {this.state.image9?(
                <>
               <Image source={{uri: this.state.image9}}
                style={{width:'100%',height:'100%',borderRadius:responsiveHeight(2)}}
                >
                 
              </Image> 
               <View style={styles.editView}>
              
               <MaterialIcons name="edit" size={30} color="#F44609" />
              
              </View>
              </>
              ):
              
              <View style={styles.editViewplus}>
              
              <Entypo name="plus" size={30} color="white" />  
               </View>
              }
              
            </TouchableOpacity>
          </View>

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
  imageView:{
    backgroundColor:'#d3d3d3',
    borderRadius:responsiveHeight(2),
    width:SCREEN_WIDTH/4,
    height:SCREEN_HEIGHT/5,
    margin:responsiveHeight(1.7),
  },
  editView:{
    backgroundColor:'white',
    width: 40, height: 40, borderRadius: 40 / 2,
    alignContent:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    position:'absolute',
    bottom:0,
    elevation:10,
 right:-5,

  },
  editViewplus:{
    backgroundColor:'#F44609',
    width: 40, height: 40, borderRadius: 40 / 2,
    alignContent:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    position:'absolute',
    bottom:0,
    elevation:10,
 right:-5,

  },
});
