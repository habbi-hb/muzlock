import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageBox from '../Components/ImageBox';
const Langugage = [
  {id: 1, name: 'Accountant'},
  {id: 2, name: 'Engineering'},
  {id: 3, name: 'Banking'},
  {id: 4, name: 'Studio'},
  {id: 5, name: 'Teaching'},
  {id: 6, name: 'Entrepreneur'},
  {id: 7, name: 'Study'},
  {id: 8, name: 'Pilot'},
  {id: 9, name: 'Swiping'},
  {id: 10, name: 'No work'},
];
export class Living extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      number: 0,
      languages: [],
    };
  }
  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '85%',
          paddingVertical: 13,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: 'red',
          borderWidth: this.state.languages.includes(item.id) ? 1 : 0,
          borderRadius: 25,
        }}
        onPress={() => {
          let temp = [...this.state.languages, item.id];
          this.setState({languages: temp});
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: 'red',
            paddingLeft: 14,
          }}>
          {item.name}
        </Text>
        {this.state.languages.includes(item.id) ? (
          <AntDesign
            name={'right'}
            color="red"
            size={20}
            style={{marginRight: 12}}
          />
        ) : null}
      </TouchableOpacity>
    );
  };
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
            onPress={() => this.props.navigation.navigate('Settings')}
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
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            Let other user let know what language you can speak.You can pick as
            many as you can like.
          </Text>
        </View>
        <ImageBox
          image={require('../assets/heart.png')}
          title={'What do you do for a Living?'}
          heightControl={120}
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
            width: '100%',
            height: '45%',
            marginTop: '5%',
          }}>
          <FlatList
            data={Langugage}
            keyExtractor={(item) => item.id}
            renderItem={this.renderRow}
          />
        </View>
      </View>
    );
  }
}

export default Living;
