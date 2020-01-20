import React, { Fragment, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { normalize } from 'react-native-elements';
import YouTube from 'react-native-youtube';
import * as env from './../env';
import { SafeAreaView } from 'react-native-safe-area-context';

function BaseCampIntro() {
  return (
    <View style={style.itemBox}>
      <Text style={style.title}>JejuCodingBaseCamp?</Text> 
      <Image 
        source={{uri:'http://paullab.co.kr/line.png'}}
        style={{width:'100%' ,height:200}}
      />
      <YouTube  
        apiKey={env.YOUTUBE_API_KEY}
        videoId={'Ha5W6vqTEDI'}
        style={{ alignSelf: 'stretch', height: 270, marginTop: 15}}
      />
    </View> 
  )
}

function PaulLabIntro() {
  return (
  <View style={style.itemBox}>
      <Text style={style.title}>바울랩!</Text>  
      <Image 
        source={{uri:'http://paullab.co.kr/logo.png'}}
        style={{width:'100%' ,height:200}}
      />
  </View>
  )
}
 
function OtherInfo() {
  return (
    <View style={{...style.itemBox, alignItems:'center'}}>
    <Image
      source={{uri:'https://i.ytimg.com/vi/Cm_qva8i8Q4/maxresdefault.jpg'}}
      style={{width:200 , height: 100}}
    />
    </View>
  )
}

const Home = ({navigation}) => {
    return(
      <ScrollView style={style.container}>
        <BaseCampIntro />
        <PaulLabIntro />
        <OtherInfo />
      </ScrollView>
    ); 
} 

const style = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 2,
    backgroundColor: '#FFFFFF',
},
itemBox: {
    flex:1,
    minWidth: '98%',
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e8e8e8', 
    marginTop: 10,
    marginLeft:5,
    resizeMode: 'contain'
},
title:{
   fontSize: normalize(20),
   fontWeight: 'bold',
   marginBottom: 15,
},
desc: {
  fontSize: normalize(15),
}
})

export default Home;