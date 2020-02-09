/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Dimensions, StyleSheet} from 'react-native';
import ImageViewr from 'react-native-image-zoom-viewer';
const Sheet = ({navigation}) => {
  const linkList = navigation.getParam('imglink');
  let img = [];
  linkList.split(',').forEach(e => {
    img.push({url: e});
  });
  return (
    <View style={{flex: 1}}>
      <Button title="닫기" onPress={() => navigation.goBack()} />
      <ImageViewr style={style.ImageViewr} imageUrls={img} />
    </View>
  );
};
export default Sheet;

const diviceWidth = Dimensions.get('screen').width;
const diviceHeight = Dimensions.get('window').height;
const style = StyleSheet.create({
  ImageViewr: {
    width: diviceWidth,
    height: diviceHeight,
    resizeMode: 'contain',
  },
});
