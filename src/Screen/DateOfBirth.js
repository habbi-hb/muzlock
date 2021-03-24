import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import Pagination from '../Components/pagination';
import {TouchableOpacity} from 'react-native-gesture-handler';

import DatePicker from 'react-native-date-picker';

export default function DateOfBirth(props) {
  const [Selected, setSelected] = useState('');
  const [date, setDate] = useState(new Date());
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: '20%'}}>
        <Text style={styles.head1}>What is your Date Of Birth?</Text>
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
      <Image
        style={{
          width: 50,
          height: 50,
          alignSelf: 'center',
          marginVertical: '8%',
        }}
        source={require('../assets/birthday.png')}
      />
      <View
        style={{
          width: '100%',
          height: '30%',
          alignItems: 'center',
        }}>
        <DatePicker date={date} onDateChange={setDate} mode="date" />
      </View>

      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.navigate('Discover')}>
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
