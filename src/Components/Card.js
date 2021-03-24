import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {isEmpty} from '../constants/functions';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Card = ({item}) => {
  return (
    <View
      style={{
        width: 120,
        height: 130,
        borderRadius: 25,
        padding: 5,
        marginHorizontal: 5,
        backgroundColor: isEmpty(item.bg) ? 'white' : item.bg,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isEmpty(item.img) ? null : (
        <Image
          source={{uri: item.img}}
          style={{
            width: 120,
            height: 150,
            borderRadius: 25,
            position: 'absolute',
          }}
        />
      )}
      <AntDesign
        name={'setting'}
        size={23}
        color="black"
        style={{marginVertical: '3%'}}
      />

      <View
        style={{
          width: '90%',
          height: '40%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            opacity: 1,
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default Card;
