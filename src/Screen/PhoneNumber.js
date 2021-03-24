import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {Button} from 'native-base';

export default function PhoneNumber(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../assets/verify.png')} resizeMode="contain" />
      </View>
      <View>
        <Text style={styles.heading}>Verify Your Number</Text>
      </View>
      <View style={{width: '100%', height: '10%', marginTop: '5%'}}>
        <Text style={styles.text1}>
          Please enter Your mobile Number to{'\n'}recive a verification code.
          Message and data{'\n'}rates may apply.
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            width: '100%',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput style={{width: '70%', borderBottomWidth: 1}} />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.navigate('Verifyphone')}>
          <Text style={{color: 'white', marginLeft: 80, fontWeight: '600'}}>
            Continue
          </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text1: {
    color: 'gray',
    textAlign: 'center',
  },
  text2: {
    marginLeft: 60,
    color: 'gray',
  },
  text3: {
    marginLeft: 150,
    color: 'gray',
  },
  btn: {
    width: 220,
    height: 55,
    alignItems: 'center',
    alignSelf: 'center',
  },
  positionbtn: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
