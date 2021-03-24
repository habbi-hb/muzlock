import React from 'react';
import {View, Text} from 'react-native';
import Sliderphoto from '../Components/sliderphoto';

const Data = [
  {
    id: 1,
    title: 'Audi',
    subtitle: 'New Car',
    img:
      'https://audimediacenter-a.akamaihd.net/system/production/media/87623/images/ab698ab934ad7ee485d260ff1d2569be289629dc/A1915496_x500.jpg?1582587184',
  },
  {
    id: 2,
    title: 'Mehran',
    subtitle: 'New Car',
    img:
      'https://audimediacenter-a.akamaihd.net/system/production/media/87623/images/ab698ab934ad7ee485d260ff1d2569be289629dc/A1915496_x500.jpg?1582587184',
  },
  {
    id: 3,
    title: 'Cultus',
    subtitle: 'New Car',
    img:
      'https://audimediacenter-a.akamaihd.net/system/production/media/87623/images/ab698ab934ad7ee485d260ff1d2569be289629dc/A1915496_x500.jpg?1582587184',
  },
];
const SliderTest = () => {
  return (
    <View style={{flex: 1}}>
      <Sliderphoto data={Data} horizontal={true} />
    </View>
  );
};

export default SliderTest;
