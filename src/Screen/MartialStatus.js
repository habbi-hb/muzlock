import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageBox from '../Components/ImageBox';
export class MartialStatus extends Component {
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
            This helps to connect you with your ideal partner
          </Text>
        </View>
        <ImageBox
          image={require('../assets/3-slide.png')}
          title={'Your Martial Status?'}
        />
        <View style={{height: '7%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: selected == 'Never' ? 1.5 : 0,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'Never'});
              setTimeout(() => this.props.navigation.navigate('Tall'), 2000);
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Never Married
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: '7%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: selected == 'Divorced' ? 1.5 : 0,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'Divorced'});
              setTimeout(() => this.props.navigation.navigate('Tall'), 2000);
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Divorced
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: '7%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: selected == 'Separated' ? 1.5 : 0,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'Separated'});
              setTimeout(() => this.props.navigation.navigate('Tall'), 2000);
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Separated
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: '7%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: selected == 'Annulled' ? 1.5 : 0,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'Annulled'});
              setTimeout(() => this.props.navigation.navigate('Tall'), 2000);
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Annulled
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: '7%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: selected == 'Windowed' ? 1.5 : 0,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'Windowed'});
              setTimeout(() => this.props.navigation.navigate('Tall'), 2000);
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Windowed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MartialStatus;
