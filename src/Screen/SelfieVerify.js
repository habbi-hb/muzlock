import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';

export default function SelfieVerify(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={{width: '100%', height: 300}}
          resizeMode="stretch"
          source={require('../assets/selfie-verification.png')}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.head1}>Selfie Verification</Text>
      </View>
      <View>
        <Text style={styles.head2}>
          We need a Selfie verification,{'\n'}This is only us,{'\n'}We didn't
          public this.
        </Text>
      </View>
      <View style={styles.camContainer}>
        <Image
          style={{
            width: 60,
            height: 40,
            position: 'relative',
          }}
          source={require('../assets/cam.png')}
        />
      </View>
      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          onPress={() => props.navigation.navigate('Origin')}
          style={styles.btn}>
          <Text style={{color: 'white', fontWeight: '600'}}>Next</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    backgroundColor: 'lightgrey',
  },
  camContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
  },
  btn: {
    width: 200,
    height: 55,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  positionbtn: {alignItems: 'center', justifyContent: 'center', width: '100%'},
  head1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  head2: {
    fontSize: 16,
    textAlign: 'center',
  },
  head3: {
    fontSize: 18,
    textAlign: 'center',
  },
  head4: {
    fontSize: 18,
    textAlign: 'center',
  },
});
