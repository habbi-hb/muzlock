import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import Pagination from '../Components/pagination';
export default function AudioVideo(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: '5%'}}>
        <Pagination index={4} />
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={{width: 270, height: 300}}
          source={require('../assets/2-slide.png')}
        />
      </View>

      {/* <Pagination index={1} /> */}

      <View>
        <Text style={styles.head1}>Premium Club</Text>
        <Text style={styles.head2}>Go Premium for an extra boost</Text>
      </View>
      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.navigate('EnableLocation')}>
          <Text style={{color: 'white', fontWeight: '600'}}>Get Started</Text>
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
