import React from 'react';
import {View, Text} from 'react-native';

const Pages = [1, 2, 3, 4];
const pagination = ({index}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: '3%',
      }}>
      {Pages.map((item) => {
        return (
          <View
            key={item}
            style={{
              width: '25%',
              borderWidth: item <= index ? 3 : 0.5,
              borderColor: 'red',
            }}
          />
        );
      })}
    </View>
  );
};

export default pagination;
