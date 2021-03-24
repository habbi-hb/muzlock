import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import Video from 'react-native-video';

const Login = (props) => {
  return (
    <>
      <Video
        source={require('../assets/login.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '45%',
            borderColor: 'white',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Logo.png')}
            style={{width: 100, height: 100}}
          />
        </View>

        <View style={{width: '100%', height: '15%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 40,
              color: 'white',
            }}>
            muzmatch
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              color: 'white',
              fontWeight: '700',
              fontFamily: 'serif',
            }}>
            Where single muslim meet
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: '30%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            style={{
              width: 350,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('PhoneNumber')}>
            <Image
              source={{
                uri:
                  'https://www.flaticon.com/premium-icon/icons/svg/2504/2504739.svg',
              }}
              style={{width: 25, height: 25, position: 'absolute', left: 25}}
            />
            <Text style={{fontWeight: 'bold'}}>Continue With Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 350,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('PhoneNumber')}>
            <Image
              source={{
                uri:
                  'https://www.flaticon.com/premium-icon/icons/svg/2504/2504792.svg',
              }}
              style={{width: 25, height: 25, position: 'absolute', left: 25}}
            />
            <Text style={{fontWeight: 'bold'}}>Continue With Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 350,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('PhoneNumber')}>
            <Image
              source={{
                uri:
                  'https://www.flaticon.com/svg/static/icons/svg/1312/1312139.svg',
              }}
              style={{width: 25, height: 25, position: 'absolute', left: 25}}
            />
            <Text style={{fontWeight: 'bold'}}>Continue With Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

export default Login;
