import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageBox = ({image, title, heightControl}) => {
  return (
    <View
      style={{
        width: '100%',
        marginTop: '5%',
        alignItems: 'center',
        paddingBottom: 10,
      }}>
      <Image
        source={image}
        style={{
          width: heightControl ? heightControl : 200,
          height: heightControl ? heightControl : 200,
        }}
        resizeMode="stretch"
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontFamily: 'serif',
          fontSize: 22,
          textAlign: 'center',
          lineHeight: 35,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default ImageBox;
