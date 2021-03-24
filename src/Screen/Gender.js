import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import Pagination from '../Components/pagination';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Gender(props) {
  const [Selected, setSelected] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: '20%'}}>
        <Text style={styles.head1}>What is your Gender?</Text>
      </View>
      <Image
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginVertical: '8%',
        }}
        source={require('../assets/sex.png')}
      />

      <View
        style={{
          height: '30%',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'grey',
            backgroundColor: Selected == 'Male' ? '#ed4558' : 'white',
          }}
          onPress={() => setSelected('Male')}>
          <Text
            style={{
              fontSize: 24,
              color: Selected == 'Male' ? 'white' : '#ed4558',
            }}>
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'grey',
            marginTop: '5%',
            backgroundColor: Selected == 'Female' ? '#ed4558' : 'white',
          }}
          onPress={() => setSelected('Female')}>
          <Text
            style={{
              fontSize: 24,
              color: Selected == 'Female' ? 'white' : '#ed4558',
            }}>
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.navigate('DateOfBirth')}>
          <Text style={{color: 'white', fontWeight: '600'}}>Continue</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  btn: {
    width: 200,
    height: 55,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  positionbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  head1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  head2: {
    fontSize: 20,
    textAlign: 'center',
  },
  head3: {
    fontSize: 20,
    textAlign: 'center',
  },
});
