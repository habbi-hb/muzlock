import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageBox from '../Components/ImageBox';
export class MoreAboutYou extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
  }
  render() {
    const {selected} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SafeAreaView />
        <View
          style={{
            width: '95%',
            height: '10%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Ionicons
            size={33}
            name={'chevron-back'}
            color={'red'}
            style={{position: 'absolute'}}
            onPress={() => this.props.navigation.goBack()}
          />
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Image
              source={require('../assets/Logo.png')}
              style={{width: 90, height: 50, marginLeft: '3%'}}
              resizeMode="cover"
            />
          </View>

          <Ionicons
            size={33}
            name={'checkmark-sharp'}
            color={'red'}
            style={{position: 'absolute', right: 0}}
            onPress={() => this.props.navigation.navigate('Status')}
          />
        </View>
        <View
          style={{
            width: '100%',
            marginTop: '4%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '100',
              fontSize: 14,
              color: 'grey',
              textAlign: 'center',
              width: '95%',
            }}>
            In your own words tell us more about yourself and what are you
            looking for
          </Text>
        </View>

        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'serif',
            fontSize: 22,
            textAlign: 'center',
            lineHeight: 35,
            marginTop: '5%',
          }}>
          Tell us more about you
        </Text>
        <View
          style={{
            width: '90%',
            borderWidth: 1,
            height: '60%',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 40,
          }}>
          <TextInput
            style={{width: '90%', marginTop: '5%', alignSelf: 'center'}}
            multiline
          />
        </View>
      </View>
    );
  }
}

export default MoreAboutYou;
