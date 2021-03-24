import React, {Component} from 'react';
import {Image, StyleSheet, Modal, TouchableHighlight} from 'react-native';
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foot from '../Components/Footer';
import {SafeAreaView} from 'react-native-safe-area-context';
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
export default class HomeUsersScreen extends Component {
  constructor() {
    super();
    this.state = {
      like: false,
      dislike: false,
      report: false,
    };
  }
  render() {
    return (
      <Container>
        <SafeAreaView />
        <ScrollView style={{width: '100%'}}>
          <View
            style={{
              width: '90%',
              height: '4%',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('FilterList')}
              style={{marginLeft: '3%', width: 30}}>
              <Image
                source={require('../assets/filter.png')}
                style={{width: 30, height: 30, marginLeft: '3%', }}
              />
            </TouchableOpacity>
            <View style={{flexGrow: 1, alignItems: 'center'}}>
              <Image
                source={require('../assets/Logo.png')}
                style={{width: 90, height: 50, marginLeft: '3%'}}
                resizeMode="cover"
              />
            </View>
            <TouchableOpacity onPress={() => this.setState({report: true})}>
              <Entypo
                name={'dots-three-vertical'}
                style={{width: 30, height: 30}}
                size={30}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          <View style={{height: 1600, marginTop: '1%'}}>
            <DeckSwiper
              ref={(c) => (this._deckSwiper = c)}
              dataSource={cards}
              onSwipeLeft={() => {
                this.setState({like: true});
                setTimeout(() => {
                  this.setState({like: false});
                }),
                  3000;
              }}
              onSwipeRight={() => {
                this.setState({dislike: true});
                setTimeout(() => {
                  this.setState({dislike: false});
                }),
                  3000;
              }}
              renderEmpty={() => (
                <View style={{alignSelf: 'center'}}>
                  <Text>Over</Text>
                </View>
              )}
              renderItem={(item) => (
                <Card style={{backgroundColor: 'lightgrey'}}>
                  <CardItem
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{
                        height: 530,
                        flex: 1,
                        borderRadius: 10,
                        width: 120,
                      }}
                      source={{uri: item.image}}
                    />
                    <View
                      style={{
                        width: '95%',
                        height: '10%',
                        position: 'absolute',
                        top: 12,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}></View>

                    <View
                      style={[
                        styles.Namebox,
                        {
                          bottom: 70,
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',

                          height: '25%',
                        },
                      ]}>
                      <Text style={styles.Name}>{item.text}</Text>
                      <Text style={[styles.Name, {fontSize: 18}]}>Karachi</Text>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          flexGrow: 1,
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <Entypo
                            name={'flag'}
                            size={22}
                            color={'green'}
                            style={{marginLeft: '2%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Pakistan
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <Entypo
                            name={'emoji-happy'}
                            size={22}
                            color={'yellow'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Pakistan
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          flexGrow: 1,
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <Entypo
                            name={'location-pin'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Hyderabad
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardItem>
                  <CardItem>
                    <View
                      style={{
                        alignItems: 'center',
                        height: 100,
                        width: '100%',
                        borderRadius: 10,
                        elevation: 2,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          width: '70%',
                          fontSize: 20,
                          fontWeight: '100',
                          textAlign: 'center',
                        }}>
                        Hello There Hey! Check My Profile
                      </Text>
                    </View>
                  </CardItem>

                  <CardItem>
                    <View
                      style={{
                        height: 120,
                        width: '100%',
                        borderRadius: 10,
                        elevation: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          width: '70%',
                          fontSize: 16,
                          color: 'grey',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        ABOUT ME
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          marginTop: '2%',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <Entypo
                            name={'dot-single'}
                            size={22}
                            color={'blue'}
                            style={{marginLeft: '2%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Single
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <Entypo
                            name={'flag'}
                            size={22}
                            color={'blue'}
                            style={{marginLeft: '2%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            16.4 Inch
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <Entypo
                            name={'flag'}
                            size={22}
                            color={'green'}
                            style={{marginLeft: '2%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Pakistan
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardItem>

                  <CardItem>
                    <View
                      style={{
                        alignItems: 'center',
                        height: 150,
                        width: '100%',
                        borderRadius: 10,
                        elevation: 2,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          width: '90%',
                          fontSize: 16,
                          textAlign: 'center',
                          fontWeight: '100',
                          letterSpacing: 0.7,
                        }}>
                        I'm a very bossy Boy and it's not who we are underneath
                        but what we do defines us so give your best without
                        worring and looking about the outcomes
                      </Text>
                    </View>
                  </CardItem>
                  <CardItem>
                    <View
                      style={{
                        height: 120,
                        width: '100%',
                        borderRadius: 10,
                        elevation: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          width: '70%',
                          fontSize: 16,
                          color: 'grey',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        MY CAREERS
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          marginTop: '2%',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialIcons
                            name={'engineering'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Engineer
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialIcons
                            name={'engineering'}
                            size={22}
                            color={'yellow'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Accountant
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardItem>

                  <CardItem>
                    <View
                      style={{
                        alignItems: 'center',
                        height: 150,
                        width: '100%',
                        borderRadius: 10,
                        elevation: 2,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          width: '90%',
                          fontSize: 16,
                          textAlign: 'center',
                          fontWeight: '100',
                          letterSpacing: 0.7,
                        }}>
                        I'm a very bossy Boy and it's not who we are underneath
                        but what we do defines us so give your best without
                        worring and looking about the outcomes
                      </Text>
                    </View>
                  </CardItem>

                  <CardItem>
                    <View
                      style={{
                        height: 220,
                        width: '100%',
                        borderRadius: 10,
                        elevation: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          width: '70%',
                          fontSize: 16,
                          color: 'grey',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        MY RELIGION
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          marginTop: '2%',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Islam
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'yelow'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Sunni
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          marginTop: '2%',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Single
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Modest Dress
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Halal Things
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          marginTop: '2%',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Doesn't Smoke
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Love
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}>
                          <MaterialCommunityIcons
                            name={'islam'}
                            size={22}
                            color={'red'}
                            style={{marginLeft: '4%'}}
                          />
                          <Text
                            style={{
                              padding: 5,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            Dance
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              )}
            />
          </View>
        </ScrollView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.like}
          onRequestClose={() => {
            this.setState({like: !this.state.like});
          }}>
          <View
            style={[
              styles.centeredView,
              {alignSelf: 'flex-start', marginLeft: '5%'},
            ]}>
            <Image
              source={require('../assets/cross.png')}
              style={{width: 80, height: 80}}
            />
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.dislike}
          onRequestClose={() => {
            this.setState({dislike: !this.state.dislike});
          }}>
          <View
            style={[
              styles.centeredView,
              {alignSelf: 'flex-end', marginRight: '5%'},
            ]}>
            <Image
              source={require('../assets/right.png')}
              style={{width: 80, height: 80}}
            />
          </View>
        </Modal>
        <View
          style={[
            styles.Namebox,
            {bottom: 40, alignSelf: 'center', width: '85%'},
          ]}>
          {/* <Text style={styles.Name}>{item.text}</Text> */}

          <TouchableOpacity style={{elevation: 3}}>
            <Image
              source={require('../assets/cross.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{elevation: 3}}>
            <Image
              source={require('../assets/heart.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.centeredView, {opacity: 0.7}]}>
          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.report}
            onRequestClose={() => {
              this.setState({report: false});
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView2}>
                <View
                  style={{
                    width: '100%',
                    height: '30%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5%',
                  }}>
                  <Image
                    source={require('../assets/3-slide.png')}
                    style={{width: 200, height: 120}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontFamily: 'serif',
                    marginTop: '5%',
                  }}>
                  Bhalu
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  Take A Action on this profile{'\n'}Don't worry this is
                  anonymous
                </Text>
                <View
                  style={{
                    width: '100%',
                    height: '10%',
                    marginTop: '10%',
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name={'star'} size={30} color="red" />
                    <Text
                      style={{
                        marginLeft: '5%',
                        fontSize: 20,
                        fontFamily: 'serif',
                      }}>
                      Favourite
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: '100%',
                    height: '10%',
                    marginTop: '3%',
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Octicons name={'report'} size={30} color="red" />
                    <Text
                      style={{
                        marginLeft: '5%',
                        fontSize: 20,
                        fontFamily: 'serif',
                      }}>
                      Report
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: '100%',
                    height: '10%',
                    marginTop: '3%',
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name={'block'} size={30} color="red" />
                    <Text
                      style={{
                        marginLeft: '5%',
                        fontSize: 20,
                        fontFamily: 'serif',
                      }}>
                      Block
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <Foot navigation={this.props.navigation} selected={'Home'} />
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
  modalView2: {
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
    height: 470,
    width: 370,
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
