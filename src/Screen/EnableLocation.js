import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

export default function EnableLocation(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Entypo name={'location-pin'} size={100} color={'purple'} />
      </View>
      <View
        style={{
          marginTop: '8%',
          width: '100%',
          height: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 26, fontWeight: 'bold'}}>
          What is your Current Location?
        </Text>
      </View>
      <View
        style={{
          height: '13%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            width: '85%',
            letterSpacing: 2,
            fontSize: 18,
            color: 'grey',
            lineHeight: 28,
          }}>
          To Match Your Perfect Partner you must be above 18 years old
        </Text>
      </View>

      <View style={[styles.positionbtn, {marginVertical: '3%'}]}>
        <Button
          rounded
          danger
          onPress={() => props.navigation.navigate('Discover')}
          style={styles.btn}>
          <Text style={{color: 'white', fontWeight: '600'}}>Current</Text>
        </Button>
      </View>

      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          onPress={() => props.navigation.navigate('HomeUsersScreen')}
          style={styles.btn}>
          <Text style={{color: 'white', fontWeight: '600'}}>Set Location</Text>
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
    height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  positionbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
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
