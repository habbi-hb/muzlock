import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Dimensions,
  View,
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
} from 'native-base';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
export default class MuzMessage extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'like',
    };
  }

  rendermsg = ({item}) => {
    return <Text style={styles.Txtmsg}>{item.msg}</Text>;
  };
  render() {
    const {selected} = this.state;
    return (
      <Container>
        <Header transparent style={{elevation: 3, height: 90}}>
          <View
            style={{
              width: '80%',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assets/Logo.png')}
              style={{width: 90, height: 50}}
            />
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>MuzMatch</Text>

            <Ionicons
              name={'chevron-back'}
              color="red"
              size={40}
              style={{position: 'absolute', left: -40}}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </Header>
        <Content>
          <ScrollView
            style={{
              width: '100%',
              height: height / 1.34,
            }}>
            <View style={{width: '100%', height: '100%'}}>
              <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={this.rendermsg}
              />
            </View>
          </ScrollView>
        </Content>

        <TouchableOpacity
          style={{
            width: 200,
            alignItems: 'center',
            borderRadius: 22,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: 'red',
            marginTop: '2%',
            alignSelf: 'center',
            marginBottom: '5%',
          }}>
          <Text style={{padding: 12, color: 'white'}}>Help</Text>
        </TouchableOpacity>
        <Foot navigation={this.props.navigation} selected={'Chat'} />
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
