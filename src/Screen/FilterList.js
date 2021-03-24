import React, {Component} from 'react';
import {
  Image,
  Switch,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from 'react-native';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {SafeAreaView} from 'react-native-safe-area-context';
export class FilterList extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SafeAreaView />
        <View
          style={{
            width: '90%',
            height: '10%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Image
              source={require('../assets/Logo.png')}
              style={{width: 90, height: 50, marginLeft: '3%'}}
              resizeMode="cover"
            />
          </View>
          <Ionicons
            name="ios-close-outline"
            size={30}
            style={{position: 'absolute'}}
            color="grey"
            onPress={() => this.props.navigation.navigate('HomeUsersScreen')}
          />
          <Text
            style={{
              position: 'absolute',
              fontWeight: 'bold',
              color: 'red',
              right: 0,
              fontSize: 16,
            }}>
            Clear All
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: '88%',
            marginTop: '2%',
          }}>
          <ScrollView>
            <View
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 24, fontFamily: 'serif', fontWeight: 'bold'}}>
                Filters
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '100',
                  letterSpacing: 0.5,
                  color: 'grey',
                }}>
                Only see peoples matching this filter lists
              </Text>
            </View>
            <View style={styles.List}>
              <View style={styles.ListView}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <Entypo name={'location-pin'} size={30} color="red" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Limit Location Bg
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        No limit
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.ListView}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <Entypo name={'cake'} size={30} color="red" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Age
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        Any Age
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.ListView}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <MaterialCommunityIcons
                      name={'islam'}
                      size={30}
                      color="red"
                    />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Sect
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.ListView}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <Entypo name={'flag'} size={30} color="red" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Ethnicity
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.ListView}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <FontAwesome5 name={'photo-video'} size={30} color="gold" />
                    <Text
                      style={{
                        marginLeft: 15,
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'grey',
                      }}>
                      Hide Blurred Photos
                    </Text>
                  </View>
                  <Switch />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 24, fontFamily: 'serif', fontWeight: 'bold'}}>
                Preferences
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '100',
                  letterSpacing: 0.5,
                  color: 'grey',
                  textAlign: 'center',
                }}>
                See Profiles People that matches these preferences first
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                height: 60,
                alignItems: 'center',
              }}>
              <View style={[styles.ListView, {height: 60}]}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <MaterialCommunityIcons
                      name={'rotate-left'}
                      size={30}
                      color="gold"
                    />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Martial Status
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 60,
                alignItems: 'center',
              }}>
              <View style={[styles.ListView, {height: 60}]}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <Entypo name={'suitcase'} size={30} color="gold" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Profession
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 60,
                alignItems: 'center',
              }}>
              <View style={[styles.ListView, {height: 60}]}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <Entypo name={'suitcase'} size={30} color="gold" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Education
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 60,
                alignItems: 'center',
              }}>
              <View style={[styles.ListView, {height: 60}]}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <FontAwesome5 name={'language'} size={30} color="gold" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Spoken Language
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 60,
                alignItems: 'center',
              }}>
              <View style={[styles.ListView, {height: 60}]}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <FontAwesome5 name={'plane'} size={30} color="gold" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Willing To Relocate
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 60,
                alignItems: 'center',
              }}>
              <View style={[styles.ListView, {height: 60}]}>
                <TouchableOpacity style={styles.MenuButton}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <FontAwesome5 name={'baby'} size={30} color="gold" />
                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Have Any Children?
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                  </View>
                  <AntDesign name={'right'} size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{backgroundColor: 'red', borderRadius: 20}}>
                <Text
                  style={{
                    paddingHorizontal: 50,
                    paddingVertical: 10,
                    borderRadius: 15,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  UPDATE TO PREMIUM
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default FilterList;

const styles = StyleSheet.create({
  MenuButton: {
    width: '93%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  ListView: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
  },
  List: {
    width: '100%',
    height: 270,
    alignItems: 'center',
    marginTop: '5%',
  },
});
