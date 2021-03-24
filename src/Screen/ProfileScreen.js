import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Thumbnail, Text, Button} from 'native-base';
import {images} from '../constants/assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
export class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: '25%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: images.ImageURL1}}
            style={{width: 150, height: 150, borderRadius: 75}}
          />
          <View style={styles.images}>
            <TouchableOpacity>
              <Image
                source={require('../assets/edit.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '8%',
            marginTop: '8%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, letterSpacing: 3}}>
            Salman Khan,25
          </Text>
          <Text style={{color: 'grey'}}>Tap to edit Profile</Text>
        </View>

        <View
          style={{
            width: '90%',
            height: '15%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.imagesproperty}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/setting.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: 'grey', fontWeight: 'bold'}}>
              SETTINGS
            </Text>
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.imagesproperty}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/filter.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: 'grey', fontWeight: 'bold'}}>
              FILTERS
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '50%',
            height: '15%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.imagesproperty}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/Report.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: 'grey', fontWeight: 'bold'}}>
              REPORT
            </Text>
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.imagesproperty}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/Help.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 14, color: 'grey', fontWeight: 'bold'}}>
              HELP
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '12%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 35, letterSpacing: 1}}>
            MUZLOCK
          </Text>

          <Text style={{fontSize: 20, color: 'gold', fontWeight: 'bold'}}>
            PREMIUM
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '53%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'grey',
            marginTop: '2%',
            backgroundColor: 'red',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
            }}>
            Get 1 Month / $99
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '53%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'grey',
            marginTop: '2%',
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onPress={() => this.props.navigation.navigate('SliderTest')}>
          <Text
            style={{
              fontSize: 18,
              color: 'red',
            }}>
            Get 3 to 12 Month
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  images: {
    position: 'absolute',
    bottom: -25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    elevation: 5,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    zIndex: 10,
    backgroundColor: 'white',
  },
  imagesproperty: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    elevation: 5,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    zIndex: 10,
    backgroundColor: 'white',
  },
});
