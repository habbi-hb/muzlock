import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Langugage = [
  {id: 1, name: 'English'},
  {id: 2, name: 'Russian'},
  {id: 3, name: 'Hindi'},
  {id: 4, name: 'Urdu'},
  {id: 5, name: 'Sindi'},
  {id: 6, name: 'Punjabi'},
  {id: 7, name: 'Arabic'},
  {id: 8, name: 'Sunskrit'},
  {id: 9, name: 'Arabian'},
  {id: 10, name: 'African'},
];
export class Languages extends Component {
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
          paddingVertical: 20,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => {
          let temp = [...this.state.languages, item.id];
          this.setState({languages: temp});
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: this.state.languages.includes(item.id) ? 'red' : 'black',
          }}>
          {item.name}
        </Text>
        {this.state.languages.includes(item.id) ? (
          <AntDesign name={'right'} color="red" size={20} />
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
            onPress={() => this.props.navigation.navigate('Origin')}
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
        <View
          style={{
            width: '85%',
            height: '10%',
            marginTop: '4%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            borderBottomWidth: 0.5,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '40%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 14}}>
              {this.state.languages.length} Selected
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: 1.5,
              borderColor: 'red',
              width: 100,
              alignItems: 'center',
            }}
            onPress={() => {
              this.setState({languages: []});
            }}>
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                paddingVertical: 10,
              }}>
              Clear All
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: '65%',
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

export default Languages;
