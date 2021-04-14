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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getData,

} from '../Component/firebaseConfig/utility';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Black Tri',
        uri: require('../assets/Stud2.jpg'),
        lastmessage: "Hi! The current Ui looks awsome",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Tri Color',
        uri: require('../assets//Stud4.jpg'),
        lastmessage: "Hi! The current Ui looks awsome",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'German',
        uri: require('../assets//Stud3.jpg'),
        lastmessage: "Hi! The current Ui looks awsome",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb21212',
        title: 'Black Tri',
        uri: require('../assets/Stud2.jpg'),
        lastmessage: "Hi! The current Ui looks awsome",
    },
];


export default class ChatDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        } 
    }

    componentDidMount = async () => {
        let currUser = await AsyncStorage.getItem('Token');
        let item = [];
        let users = await getData('users', currUser);
        if (users.chatted) {
            //  async () => {
            this.setState({ users: users.chatted, userdata: item });
            item = await Promise.all(
                this.state.users.map(async data => {
                    try {
                        item = await getData('users', data);
                        return item;
                    } catch (err) {
                        throw err;
                    }
                }),
            );
            this.setState({ userdata: item });
        } else {
            this.setState({ noData: true });
        }

    };

    renderItem1 = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item1}
            onPress={() => this.props.navigation.navigate('ChatScreen',{item:item})}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.flatImage}></Image>
                <View style={{ alignSelf: 'center', }}>

                    <Text style={styles.title1}>{item.firstname}</Text>

                    <Text style={styles.lastmessage}>{item.lastmessage}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}
            onPress={() => this.props.navigation.navigate('ChatScreen',{item:item})}
            >

                <Image
                     source={{ uri: item.image }}
                    style={styles.flatImage}></Image>
                <Text style={styles.title}>{item.firstname}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        // const renderItem = ({ item }) => <Item title={item.title} uri={item.uri} />;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 0, padding: 16, }}>
                    <View style={{}}>
                        <Text style={{ padding: 8, color: '#F44609', fontSize: responsiveFontSize(2) }}>New Matches</Text>
                            <FlatList data={this.state.userdata}
                            horizontal={true}
                            renderItem={this.renderItem} keyExtractor={item => item.id} />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ChatRequest')}
                        style={{ alignSelf: 'flex-end', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/icon/Vector.png')}
                            style={styles.Messageicon}></Image>

                        <Text style={{
                            color: '#F44609',
                            marginHorizontal: responsiveHeight(0),
                            textAlign: 'right',
                            alignSelf: 'stretch'
                        }}>{"Messages\nRequest"}</Text>
                    </TouchableOpacity>


                    <View>
                        <FlatList data={this.state.userdata}
                            horizontal={false}
                            renderItem={this.renderItem1}
                        />
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
        fontSize: responsiveFontSize(2.5),

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
