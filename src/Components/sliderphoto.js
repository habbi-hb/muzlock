import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CardItem from '../Components/Card';
const sliderphoto = ({data, horizontal}) => {
  return (
    <View>
      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({item, i}) => {
          return <CardItem item={item} key={item.id} />;
        }}
      />
    </View>
  );
};

export default sliderphoto;
