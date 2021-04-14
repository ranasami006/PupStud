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
import * as firebase from 'firebase'
import 'firebase/firestore';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData,getAllOfCollectionWithStud } from '../Component/firebaseConfig/utility';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ChatRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data:[]
        }
    }
    async componentDidMount() {
        const dbh = firebase.firestore();
        let userId = await AsyncStorage.getItem('Token');
        let data = [];
        let that = this;
        let data2=[];
       
        let data1=await getAllOfCollectionWithStud("messageRequest",userId);
       // console.log(data1)
        data1.length!=0?(
            
            await Promise.all(data1.map(async (file) => {
                let studdata = await getData('studs',file.studId)
               studdata.likerId=file.likerId;
                data2.push(studdata);
              })),
              this.setState({Data:data2})  
            ):(null)
           
        
       
        await dbh
            .collection('messageRequest')
            .where("ownerId", "==", userId)
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                       data.push(change.doc.data());
                    }
                });
            }); 
         if ( data.length != 0) {
               this.setState({Data:data}) 
               
            }  
    console.log("PAKKA ",this.state.Data)
    }

    renderItem1 = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item1}
                onPress={() => this.props.navigation.navigate('ChatScreen',{item:item})}
            >
                <Image
                    source={{uri:item.uri}}
                    style={styles.flatImage}></Image>
                <View style={{ alignSelf: 'center', }}>
                    <Text style={styles.title1}>{item.name}</Text>

                    <Text style={styles.lastmessage}>{item.lastmessage}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 0, padding: 16, }}>

                    <Text style={{
                        padding: 5, color: '#F44609', fontSize: responsiveFontSize(2),
                        textAlign: 'center',
                    }}>Messages Request</Text>
                    <View>
                        {this.state.Data?(
                        <FlatList data={this.state.Data}
                            horizontal={false}
                            renderItem={this.renderItem1}
                        />
                        ):(
                            <Text>No new messages request availble</Text>
                        )}
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
};
const styles = StyleSheet.create({

    item1: {
        flexDirection: 'row',
        margin: responsiveHeight(1),
    },
    item: {
        // flexDirection:'row',
        margin: responsiveHeight(1),
    },
    title: {
        alignSelf: 'center',
        fontSize: responsiveFontSize(2)
    },
    title1: {
        marginHorizontal: responsiveHeight(2),
        // padding:responsiveHeight(0.5),
        fontSize: responsiveFontSize(2)
    },
    lastmessage: {
        marginHorizontal: responsiveHeight(2),
        //padding:responsiveHeight(0.5),
        marginRight: responsiveHeight(1)
    },
    flatImage: {
        width: 90, height: 90, borderRadius: 90 / 2,
        //alignSelf: 'center',

    },
    Messageicon: {
        width: responsiveWidth(6),
        height: responsiveHeight(3),
        alignSelf: 'flex-end',
        marginRight: responsiveHeight(1.6)
    }
});
