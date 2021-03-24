import React from 'react';
import {
  StyleSheet,
  Picker,
  Text,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
  PanResponder,
  AsyncStorage,
  Alert,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {
//   Ionicons,
//   FontAwesome5,
//   AntDesign,
//   EvilIcons,
//   MaterialIcons,
//   MaterialCommunityIcons,
//   Entypo,
// } from "@expo/vector-icons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import axios from 'axios';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Data = [
  {
    id: 1,
    name: 'Ahsan',
    feature_image: {
      uri:
        'data:image/jpeg;base64,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',
    },
  },
];
class Home extends React.Component {
  constructor() {
    super();
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      UID: '',

      DATAUSER: [],
      filter: false,
      UserID: 0,
      filterAge: 0,
      filterName: '',
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp',
    });
  }
  async componentDidMount() {
    this.PenresponderSet();
    // console.log(this.props.users);
  }

  PenresponderSet = () => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y: gestureState.dy},
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: gestureState.dy},
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: {x: 0, y: 0},
            friction: 4,
          }).start();
        }
      },
    });
  };

  renderUsers = () => {
    // const {DATA, DATAUSER} = this.state;

    return Data.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 180,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute',
              },
            ]}>
            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                transform: [{rotate: '30deg'}],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10,
                }}>
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20,
              }}
              source={item.feature_image}
            />

            <View style={{marginTop: -120}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  width: '75%',
                  marginBottom: 15,
                }}>
                {item.name}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{alignSelf: 'center', width: '33%'}}>
                  <Text>Check</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', width: '33%'}}>
                  <Text>Checking</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', width: '33%'}}>
                  <Text>Checking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{scale: this.nextCardScale}],
                height: SCREEN_HEIGHT - 180,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute',
              },
            ]}>
            <Animated.View
              style={{
                opacity: 0,
                transform: [{rotate: '30deg'}],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10,
                }}>
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20,
              }}
              source={item.IMG}
            />

            <View style={{marginTop: -120}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  marginBottom: 15,
                }}>
                {item.name}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('#')}
                  style={{alignSelf: 'center', width: '33%'}}>
                  <Text>Checking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('message')}
                  style={{alignSelf: 'center', width: '33%'}}>
                  <Text>Checking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('#')}
                  style={{alignSelf: 'center', width: '33%'}}>
                  <Text>Checking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#000', height: '4%'}}></View>

        <View style={{height: 50, backgroundColor: '#fff'}}>
          <View
            style={{
              marginLeft: wp('5%'),
              marginTop: 17,
              flexDirection: 'row',
            }}>
            <View style={{width: '50%'}}>
              <TouchableOpacity
                style={{alignSelf: 'flex-start'}}
                onPress={() => this.props.navigation.navigate('Profile')}>
                <FontAwesome5 name="user" color="#B1B1B1" size={20} />
              </TouchableOpacity>
            </View>

            <View style={{width: '50%'}}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end', marginRight: 20}}
                onPress={() => this.setState({filter: true})}>
                <FontAwesome5 name="cog" color="#B1B1B1" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{height: 0}}></View>
        <View style={{flex: 1}}>{this.renderUsers()}</View>
        <View style={{height: 0}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
