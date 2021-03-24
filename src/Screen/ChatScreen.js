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
  Thumbnail,
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Foot from '../Components/Footer';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('screen');

const Datum = [
  {id: 1, name: 'Kainat Mehar', message: 'Hello there good people'},
  {id: 2, name: 'Shaks Khan', message: 'Hello there good people'},
];
export default class ChatScreen extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'like',
    };
  }
  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '90%',
          height: 70,
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        onPress={() => this.props.navigation.navigate('UserMessages')}>
        <Thumbnail source={require('../assets/Logo.png')} resizeMode="cover" />
        <View
          style={{
            flexGrow: 1,
            paddingLeft: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold'}}>{item.name}</Text>

          <Text style={{fontWeight: '100'}}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {selected} = this.state;
    return (
      <Container>
        <SafeAreaView />
        <Header transparent>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/Logo.png')}
              style={{width: 90, height: 50}}
            />

            <FontAwesome5
              name={'heart-broken'}
              color="grey"
              size={30}
              style={{position: 'absolute', right: 10}}
            />
          </View>
        </Header>
        <Content>
          <ScrollView
            contentContainerStyle={{
              width: '100%',
              height: height / 1.34,
            }}>
            <View style={{width: '100%', height: '100%'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  height: '16%',
                  justifyContent: 'space-between',
                  marginTop: '5%',
                }}>
                <Text
                  style={{
                    fontFamily: 'serif',
                    fontWeight: 'bold',
                    fontSize: 25,
                  }}>
                  Your Chat
                </Text>
              </View>
              <View
                style={{
                  height: '12%',
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MuzMessage')}
                  style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 40,
                      elevation: 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../assets/Logo.png')}
                      style={{width: 60, height: 30}}
                    />
                  </View>
                  <View
                    style={{
                      flexGrow: 1,
                      height: '100%',
                      paddingLeft: 10,
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontWeight: 'bold'}}>MuzMatch</Text>

                    <Text
                      style={{fontSize: 14, width: '70%'}}
                      numberOfLines={2}>
                      Hello Welcome To MuzMatch App! Bismillah Al-Rehman
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '60%',
                  marginTop: '5%',
                }}>
                <FlatList
                  data={Datum}
                  keyExtractor={(item) => item.id}
                  renderItem={this.renderRow}
                />
              </View>
            </View>
          </ScrollView>
        </Content>

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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
