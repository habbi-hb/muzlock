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
import Octicons from 'react-native-vector-icons/Octicons';
import Foot from '../Components/Footer';
const {width, height} = Dimensions.get('screen');

const cards = [
  {
    text: 'Humaima Malick, 26',
    name: 'One',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JU0jzN2zSGIKJYg9V2-ERPHwal9aNFy6iA&usqp=CAU',
  },
  {
    text: 'Ali Imran, 38',
    name: 'One',
    image:
      'https://st3.depositphotos.com/8205786/14155/i/1600/depositphotos_141553364-stock-photo-business-man-hd.jpg',
  },
  {
    text: 'Shakeel Ansari, 39',
    name: 'One',
    image:
      'https://expertphotography.com/wp-content/uploads/2020/05/male-poses-squint.jpg',
  },
];

const TabsDefault = () => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <View
        style={{
          height: '15%',
          width: '98%',
          alignSelf: 'center',
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fc44b9',
          marginTop: '2%',
          justifyContent: 'space-evenly',
        }}>
        <FontAwesome name={'send'} size={30} color={'white'} />
        <Text style={{color: 'white', fontSize: 13}}>
          Turn on Your filter Notification
        </Text>

        <Text style={{color: 'white', fontWeight: 'bold'}}>Enable</Text>

        <FontAwesome name={'close'} size={20} color={'white'} />
      </View>
      <View
        style={{
          width: '100%',
          height: '40%',
          marginTop: '2%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/2-slide.png')}
          resizeMode="stretch"
          style={{width: 230, height: 200}}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '16%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: 'serif', fontWeight: 'bold', fontSize: 22}}>
          Liked You
        </Text>

        <Text
          style={{
            color: 'grey',
            fontSize: 16,
            width: '90%',
            textAlign: 'center',
          }}>
          People who like you will appear here. Start Swiping to come in people
          search
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '20%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 300,
            alignItems: 'center',
            borderRadius: 22,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: 'red',
            marginTop: '2%',
          }}>
          <MaterialCommunityIcons
            name={'cards'}
            size={35}
            color={'white'}
            style={{position: 'absolute', left: 8}}
          />
          <Text style={{padding: 12, color: 'white'}}>Start Discovering</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 300,
            alignItems: 'center',
            borderRadius: 22,
            flexDirection: 'row',
            justifyContent: 'space-evenly',

            marginTop: '2%',
          }}>
          <Image
            source={require('../assets/filtericn.png')}
            style={{position: 'absolute', left: 30}}
          />
          <Text style={{padding: 12, color: 'grey', fontWeight: 'bold'}}>
            Edit Filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Favourited = () => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <View
        style={{
          width: '100%',
          height: '40%',
          marginTop: '2%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/1-slide.png')}
          resizeMode="stretch"
          style={{width: 230, height: 200}}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '16%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: 'serif', fontWeight: 'bold', fontSize: 22}}>
          Favourited
        </Text>

        <Text
          style={{
            color: 'grey',
            fontSize: 16,
            width: '90%',
            textAlign: 'center',
          }}>
          People who you have Favourited will appear here.Don't worry they won't
          know you have favourited them
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '20%',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <TouchableOpacity
          style={{
            width: 300,
            alignItems: 'center',
            borderRadius: 22,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: 'red',
            marginTop: '2%',
          }}>
          <MaterialCommunityIcons
            name={'cards'}
            size={35}
            color={'white'}
            style={{position: 'absolute', left: 8}}
          />
          <Text style={{padding: 12, color: 'white'}}>Start Discovering</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Blocked = () => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <View
        style={{
          width: '100%',
          height: '40%',
          marginTop: '2%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/3-slide.png')}
          resizeMode="stretch"
          style={{width: 230, height: 200}}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '16%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: 'serif', fontWeight: 'bold', fontSize: 22}}>
          Blocked
        </Text>

        <Text
          style={{
            color: 'grey',
            fontSize: 16,
            width: '90%',
            textAlign: 'center',
          }}>
          People you have blocked will appear hear. They will never see you
          anywhere at all.{'\n'} Only Gold member can unlock anyone they have
          blocked
        </Text>
      </View>
    </View>
  );
};

const VisitedYou = () => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{width: '100%', marginTop: '5%'}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily: 'serif',

            alignSelf: 'center',
          }}>
          Visited You
        </Text>
      </View>
      <View style={{width: '100%', marginTop: '2%'}}>
        <Text
          style={{
            fontSize: 14,
            color: 'grey',
            alignSelf: 'center',
          }}>
          These Peoples have visited your Profile recently
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          height: '80%',
          marginTop: '5%',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <FlatList
          data={cards}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(item, i) => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '48%',
                  height: 220,
                  borderRadius: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: item.image}}
                  resizeMode="stretch"
                  style={{height: 220, borderRadius: 8}}
                />
                <View
                  style={{
                    position: 'absolute',
                    height: '50%',
                    width: '100%',
                    alignSelf: 'center',
                    bottom: 0,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {item.text}
                  </Text>
                  <Text
                    style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                    Chartered Accountant
                  </Text>
                  <Text style={{fontSize: 12, color: 'white'}}>Karachi</Text>

                  <Text style={{color: 'white', fontSize: 12}}>
                    2 weeks ago
                  </Text>
                </View>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const Passed = () => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{width: '100%', marginTop: '5%'}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily: 'serif',

            alignSelf: 'center',
          }}>
          Passed
        </Text>
      </View>
      <View style={{width: '100%', marginTop: '2%'}}>
        <Text
          style={{
            fontSize: 14,
            color: 'grey',
            alignSelf: 'center',
          }}>
          These Peoples have visited your Profile recently
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '14%',
          alignItems: 'center',
          marginTop: '2%',
        }}>
        <TouchableOpacity
          style={{
            width: 300,
            alignItems: 'center',
            borderRadius: 22,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: 'red',
            marginTop: '2%',
          }}>
          <MaterialCommunityIcons
            name={'cards'}
            size={35}
            color={'white'}
            style={{position: 'absolute', left: 8}}
          />
          <Text style={{padding: 12, color: 'white'}}>Reset Swipe</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
          height: '65%',
          marginTop: '1%',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <FlatList
          data={cards}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(item, i) => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '48%',
                  height: 220,
                  borderRadius: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: item.image}}
                  resizeMode="stretch"
                  style={{height: 220, borderRadius: 8}}
                />
                <View
                  style={{
                    position: 'absolute',
                    height: '50%',
                    width: '100%',
                    alignSelf: 'center',
                    bottom: 0,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {item.text}
                  </Text>
                  <Text
                    style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                    Chartered Accountant
                  </Text>
                  <Text style={{fontSize: 12, color: 'white'}}>Karachi</Text>

                  <Text style={{color: 'white', fontSize: 12}}>
                    2 weeks ago
                  </Text>
                </View>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const Liked = () => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{width: '100%', marginTop: '5%'}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily: 'serif',

            alignSelf: 'center',
          }}>
          Liked
        </Text>
      </View>
      <View style={{width: '100%', marginTop: '2%'}}>
        <Text
          style={{
            fontSize: 14,
            color: 'grey',
            alignSelf: 'center',
          }}>
          These Peoples have visited your Profile recently
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '14%',
          alignItems: 'center',
          marginTop: '2%',
        }}>
        <TouchableOpacity
          style={{
            width: 300,
            alignItems: 'center',
            borderRadius: 22,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: 'red',
            marginTop: '2%',
          }}>
          <MaterialCommunityIcons
            name={'cards'}
            size={35}
            color={'white'}
            style={{position: 'absolute', left: 8}}
          />
          <Text style={{padding: 12, color: 'white'}}>Reset Swipe</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
          height: '65%',
          marginTop: '1%',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <FlatList
          data={cards}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(item, i) => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '48%',
                  height: 220,
                  borderRadius: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: item.image}}
                  resizeMode="stretch"
                  style={{height: 220, borderRadius: 8}}
                />
                <View
                  style={{
                    position: 'absolute',
                    height: '50%',
                    width: '100%',
                    alignSelf: 'center',
                    bottom: 0,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {item.text}
                  </Text>
                  <Text
                    style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                    Chartered Accountant
                  </Text>
                  <Text style={{fontSize: 12, color: 'white'}}>Karachi</Text>

                  <Text style={{color: 'white', fontSize: 12}}>
                    2 weeks ago
                  </Text>
                </View>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
};
export default class HomeUsersScreen extends Component {
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
        <Header transparent>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/filtericn.png')}
              style={{position: 'absolute', left: 10}}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Explore</Text>
          </View>
        </Header>
        <Content>
          <ScrollView
            contentContainerStyle={{
              width: '100%',
              height: height / 1.34,
            }}>
            <Tabs
              tabContainerStyle={{backgroundColor: 'white'}}
              tabBarUnderlineStyle={{backgroundColor: 'red'}}
              style={{backgroundColor: 'white'}}
              renderTabBar={() => <ScrollableTab />}>
              <Tab
                heading={
                  <TabHeading style={{backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      Like you
                    </Text>
                  </TabHeading>
                }>
                <TabsDefault />
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
                      Visited You
                    </Text>
                  </TabHeading>
                }>
                <VisitedYou />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      Favourite
                    </Text>
                  </TabHeading>
                }>
                <Favourited />
              </Tab>

              <Tab
                heading={
                  <TabHeading style={{backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      Passed
                    </Text>
                  </TabHeading>
                }>
                <Passed />
              </Tab>

              <Tab
                heading={
                  <TabHeading style={{backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      Like
                    </Text>
                  </TabHeading>
                }>
                <Liked />
              </Tab>

              <Tab
                heading={
                  <TabHeading style={{backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      Blocked
                    </Text>
                  </TabHeading>
                }>
                <Blocked />
              </Tab>
            </Tabs>
          </ScrollView>
        </Content>

        <Foot navigation={this.props.navigation} selected={'Bino'} />
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
