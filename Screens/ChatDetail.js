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
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Black Tri',
        uri: require('../assets/Stud2.jpg'),
        lastmessage:"Hi! The current Ui looks awsome",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Tri Color',
        uri: require('../assets//Stud4.jpg'),
        lastmessage:"Hi! The current Ui looks awsome",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'German',
        uri: require('../assets//Stud3.jpg'),
        lastmessage:"Hi! The current Ui looks awsome",
    },
];

const Item = ({ title, uri }) => (
    <View style={styles.item}>

        <Image
            source={uri}
            style={styles.flatImage}></Image>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const Item1 = ({ title, uri,lastmessage }) => (
    <View style={styles.item1}>

        <Image
            source={uri}
            style={styles.flatImage}></Image>
    <View style={{alignSelf:'center',}}>
        
        <Text style={styles.title1}>{title}</Text>
        
        <Text style={styles.lastmessage}>{lastmessage}</Text>
    </View>
    </View>
);
export default class ChatDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const renderItem = ({ item }) => <Item title={item.title} uri={item.uri} />;
        const renderItem1 = ({ item }) => <Item1 title={item.title} uri={item.uri} lastmessage={item.lastmessage} />;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 0, padding: 16, }}>
                    <View style={{}}>
                        <Text style={{ padding: 8, color: '#F44609', fontSize: responsiveFontSize(2) }}>New Matches</Text>
                        <FlatList data={DATA}
                            horizontal={true}
                            renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                    <View style={{alignSelf:'flex-end'}}>
                        <Image
                            source={require('../assets/icon/Vector.png')}
                            style={styles.Messageicon}></Image>
                           <Text style={{color: '#F44609',marginHorizontal:responsiveHeight(-3)}}>Messages {"\n"}Request</Text>

                    </View>
                <View >
                      <FlatList data={DATA}
                            horizontal={false}
                            renderItem={renderItem1} keyExtractor={item => item.id} />   
                </View>  

                </ScrollView>
            </SafeAreaView>
        );
    }
};
const styles = StyleSheet.create({

    item1: {
         flexDirection:'row',
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
        marginHorizontal:responsiveHeight(2),
       // padding:responsiveHeight(0.5),
        fontSize: responsiveFontSize(2)
    },
    lastmessage:{
        marginHorizontal:responsiveHeight(2),
        //padding:responsiveHeight(0.5),
        marginRight:responsiveHeight(1)
    },
    flatImage: {
        width: 90, height: 90, borderRadius: 90 / 2,
        //alignSelf: 'center',

    },
    Messageicon:{
        width:responsiveWidth(6),
        height:responsiveHeight(3),
       alignSelf:'flex-end',
    }
});
