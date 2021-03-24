import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import Pagination from '../Components/pagination';
export default function Premium(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: '5%'}}>
        <Pagination index={3} />
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={{width: 270, height: 300}}
          source={require('../assets/3-slide.png')}
        />
      </View>

      {/* <Pagination index={1} /> */}

      <View>
        <Text style={styles.head1}>Audio/Video Calls</Text>
        <Text style={styles.head2}>Unlimited Audio/Video Calling</Text>
        <Text style={styles.head3}>without compromising your privacy.</Text>
      </View>

      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.goBack()}>
          <Text style={{color: 'white', fontWeight: '600'}}>Previous</Text>
        </Button>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.navigate('AudioVideo')}>
          <Text style={{color: 'white', fontWeight: '600'}}>Next</Text>
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
    height: '50%',
  },
  btn: {
    width: 170,
    height: 55,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  positionbtn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  head1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  head2: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%',
  },
  head3: {
    fontSize: 20,
    textAlign: 'center',
  },
});
