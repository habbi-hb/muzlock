import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Thumbnail, Text, Button} from 'native-base';
import {images} from '../constants/assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Sliderphoto from '../Components/sliderphoto';

const Data = [
  {
    id: 1,
    title: 'Hello ',
    subtitle: '123',
    bg: 'yellow',
  },
  {
    id: 2,
    title: 'Hello ',
    subtitle: '123',
    bg: 'lightblue',
  },
  {
    id: 3,
    title: 'We are a group of hight ',
    subtitle: '123',
    bg: 'lightpink',
  },

  {
    id: 4,
    title: 'Check',
    subtitle: '123',
    bg: 'lightgreen',
  },
];
export class Settings extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <View style={styles.Ball1} />
        <View style={styles.Ball2} />
        <View
          style={{
            width: '100%',
            height: '12%',
            marginTop: '10%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '40%', alignItems: 'center'}}>
            <Thumbnail large source={{uri: images.ImageURL1}} />
          </View>
          <View style={{width: '50%'}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: 'sans-serif',
              }}>
              Wasif Ahmed
            </Text>
          </View>
        </View>
        <View style={styles.List}>
          <View style={styles.ListView}>
            <TouchableOpacity 
              style={styles.MenuButton}
              onPress={() => this.props.navigation.navigate('ProfileScreen')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <FontAwesome5 name={'user-edit'} size={23} color="grey" />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  Edit Profile
                </Text>
              </View>
              <AntDesign name={'right'} size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.ListView}>
            <TouchableOpacity
              style={styles.MenuButton}
              onPress={() => this.props.navigation.navigate('MoveAbroad')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <FontAwesome5 name={'search'} size={23} color="grey" />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  Search Preferences
                </Text>
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
                <AntDesign name={'setting'} size={23} color="grey" />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  Settings
                </Text>
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
                <FontAwesome5 name={'share'} size={23} color="grey" />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  Share Veil
                </Text>
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
                <FontAwesome5 name={'user-edit'} size={23} color="grey" />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  Contact Us
                </Text>
              </View>
              <AntDesign name={'right'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '70%'}}>
          <Sliderphoto data={Data} horizontal={true} />
        </View>
      </View>
    );
  }
}

export default Settings;

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
  Ball1: {
    position: 'absolute',
    height: 250,
    width: 250,
    borderRadius: 125,
    backgroundColor: 'pink',
    opacity: 0.6,
    left: -100,
    top: -50,
  },
  Ball2: {
    position: 'absolute',
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'lightblue',
    opacity: 0.6,
    left: 100,
    top: -60,
  },
  MenuButton: {
    width: '90%',
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
    height: '50%',
    alignItems: 'center',
    marginTop: '5%',
  },
});
