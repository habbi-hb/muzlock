import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Dimensions,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Content,
  Text,
  TabHeading,
  Icon,
  Thumbnail,
} from 'native-base';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Foot from '../Components/Footer';
const {width, height} = Dimensions.get('screen');

const Data = [
  {id: 1, msg: 'Hello To Our App'},
  {
    id: 2,
    msg: 'Start connecting with the people in order to know more about them',
  },
  {
    id: 3,
    msg:
      'Our App has got beautifuls Feature with alots of new plugin, Connect with different people to know more about them start chatting ',
  },
];

const Messages = () => {
  return (
    <View
      style={{
        width: '100%',
        height: height / 1.35,
      }}>
      <View style={{width: '100%', height: '88%'}}>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return <Text style={styles.Txtmsg}>{item.msg}</Text>;
          }}
        />
      </View>
      <View
        style={{
          height: '11%',
          width: '100%',
          flexDirection: 'row',
        }}>
        <KeyboardAvoidingView
          style={{
            width: '75%',
            borderWidth: 2,
            marginLeft: '2%',
            borderRadius: 50,
            flexDirection: 'row',
            borderColor: 'red',
            alignItems: 'center',
          }}>
          <TextInput style={{flexGrow: 1, paddingLeft: 15}} />
          <EvilIcons name={'paperclip'} size={35} />
        </KeyboardAvoidingView>
        <View
          style={{
            width: '22%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity>
            <Entypo name={'camera'} size={25} color="red" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Entypo name={'mic'} size={25} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default class UserMessages extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'like',
    };
  }

  render() {
    const {selected} = this.state;
    return (
      <Container>
        <Header transparent style={{elevation: 3, height: 90}}>
          <View
            style={{
              width: '99%',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Ionicons
              name={'chevron-back'}
              color="red"
              size={40}
              onPress={() => this.props.navigation.goBack()}
            />
            <Thumbnail
              source={require('../assets/Logo.png')}
              resizeMode="center"
            />
            <Text style={{fontSize: 22, fontWeight: 'bold', flexGrow: 1}}>
              MuzMatch
            </Text>
            <TouchableOpacity style={{paddingHorizontal: 4}}>
              <FontAwesome name={'video-camera'} color="red" size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 4}}>
              <Entypo name={'phone'} color="red" size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 4}}>
              <Entypo name={'dots-three-horizontal'} color="grey" size={25} />
            </TouchableOpacity>
          </View>
        </Header>
        <Content>
          <Tabs
            tabContainerStyle={{backgroundColor: 'white'}}
            tabBarUnderlineStyle={{backgroundColor: 'red'}}
            style={{backgroundColor: 'white'}}>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: 'white'}}>
                  <Text
                    style={{
                      color: 'grey',
                      fontWeight: 'bold',
                    }}>
                    Chat
                  </Text>
                </TabHeading>
              }>
              <Messages />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: 'white'}}>
                  <Text
                    style={{
                      color: 'grey',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Profile
                  </Text>
                </TabHeading>
              }>
              <Messages />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Namebox: {
    height: '15%',
    width: '95%',
    position: 'absolute',
    bottom: -10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  Name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Txtmsg: {
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    marginTop: '2%',
    width: '80%',
    marginLeft: 10,
    fontSize: 14,
  },
});
