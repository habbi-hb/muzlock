import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import Pagination from '../Components/pagination';
export default function Match(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: '5%'}}>
        <Pagination index={2} />
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={{width: 270, height: 300}}
          source={require('../assets/1-slide.png')}
        />
      </View>

      {/* <Pagination index={1} /> */}

      <View>
        <Text style={styles.head1}>Match</Text>
        <Text style={styles.head2}>If other user also like your request,</Text>
        <Text style={styles.head3}>then it's a match</Text>
      </View>

      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => props.navigation.navigate('Premium')}>
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
    width: 200,
    height: 55,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: '2%',
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
