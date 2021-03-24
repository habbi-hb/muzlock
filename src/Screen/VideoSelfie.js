import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {Button} from 'native-base';

export default function VideoSelfie(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/video-selfie-icon.png')}
          resizeMode="contain"
          style={{height: 250, width: 220}}
        />
      </View>
      <View style={{height: '20%', justifyContent: 'center'}}>
        <Text style={styles.Txt}>Take a Video Selfie</Text>
        <Text style={styles.heading2}>
          We Need a short video of you for verification that you are real. This
          is for only us. We didn't public this. This video is automatic by 1
          minute.
        </Text>
      </View>
      <View style={styles.utubeContainer}>
        <Image
          style={{
            width: 80,
            height: 60,
            position: 'relative',
          }}
          source={require('../assets/utube.png')}
        />
      </View>
      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.navigate('SelfieVerify')}>
          <Text style={{color: 'white'}}>Next</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  innerContainer: {
    height: '40%',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
  },
  Txt: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heading2: {
    textAlign: 'center',

    width: '80%',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: '2%',
  },
  utubeContainer: {
    width: '70%',
    height: '25%',
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 200,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positionbtn: {
    alignSelf: 'center',
    marginTop: '6%',
  },
});
