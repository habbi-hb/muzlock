import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {Button} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

export default function Verifyphone(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../assets/verify.png')} resizeMode="contain" />
      </View>

      <View
        style={{
          width: '100%',
          height: '5%',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text1}>Enter The code send to</Text>
        <Text
          style={{
            color: 'red',
            marginLeft: '2%',
            fontStyle: 'italic',
          }}>
          +921313131313
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            width: '60%',
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',

            alignSelf: 'center',
          }}>
          <TextInput
            style={{width: '10%', borderBottomWidth: 1, textAlign: 'center'}}
          />
          <TextInput
            style={{width: '10%', borderBottomWidth: 1, textAlign: 'center'}}
          />
          <TextInput
            style={{width: '10%', borderBottomWidth: 1, textAlign: 'center'}}
          />
          <TextInput
            style={{width: '10%', borderBottomWidth: 1, textAlign: 'center'}}
          />
          <TextInput
            style={{width: '10%', borderBottomWidth: 1, textAlign: 'center'}}
          />
        </View>
      </KeyboardAvoidingView>

      <View
        style={{
          width: '100%',
          height: '5%',
          marginTop: '1%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text1}>Didn't got the code?</Text>
        <Text
          style={{
            color: 'red',
            marginLeft: '2%',
          }}>
          RESEND
        </Text>
      </View>
      <View style={styles.positionbtn}>
        <Button
          rounded
          danger
          style={styles.btn}
          onPress={() => {
            setModalVisible(true,);
            props.navigation.navigate('VideoSelfie');
            setModalVisible(false)
          }}>
          <Text style={{color: 'white', marginLeft: 80, fontWeight: '600'}}>
            Continue
          </Text>
        </Button>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Feather
                name={'check-circle'}
                color={'green'}
                size={33}
                style={{paddingBottom: 10}}
              />
              <Text style={styles.modalText}>Verified{'\n'}Successfully</Text>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
