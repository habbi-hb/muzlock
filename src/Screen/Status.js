import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageBox from '../Components/ImageBox';
export class Status extends Component {
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
        </View>
        <View
          style={{
            width: '100%',
            marginTop: '4%',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '100', fontSize: 14, color: 'grey'}}>
            Get better connection with the company you work on with
          </Text>
        </View>
        <ImageBox
          image={require('../assets/heart.png')}
          title={'Status Message'}
        />
        <KeyboardAvoidingView
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 30,
            borderColor: 'red',
          }}>
          <TextInput style={{width: '100%', paddingLeft: 20}} />
        </KeyboardAvoidingView>

        <View
          style={{
            height: '7%',
            width: '100%',
            alignItems: 'center',
            marginTop: '10%',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: 1.5,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'Other'});
              setTimeout(() => this.props.navigation.navigate('Living'), 2000);
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Status;
