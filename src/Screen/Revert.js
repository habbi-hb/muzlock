import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageBox from '../Components/ImageBox';
export class Revert extends Component {
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
          image={require('../assets/1-slide.png')}
          title={'Are you convert/Revert?'}
        />
        <View style={{height: '7%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: selected == 'yes' ? 1.5 : 0,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'yes'});
               this.props.navigation.navigate('Gender')
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: '7%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              borderWidth: selected == 'No' ? 1.5 : 0,
              borderColor: 'red',
            }}
            onPress={() => {
              this.setState({selected: 'No'});
          this.props.navigation.navigate('Gender')
            }}>
            <Text
              style={{
                paddingHorizontal: 50,
                fontSize: 18,
                paddingVertical: 10,
                color: 'red',
                fontWeight: 'bold',
              }}>
              No
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Revert;
