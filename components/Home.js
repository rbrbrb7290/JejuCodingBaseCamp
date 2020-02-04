import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { normalize } from 'react-native-elements';
import AdMob from '../components/Admob';

function BaseCampIntro() {
  return (
    <View style={style.itemBox}>
      <Text style={style.title}>JejuCodingBaseCamp</Text> 
      <Image 
        source={require('./../images/camp_Intro.png')}
        style={{ width: '100%',height:500, resizeMode:'center', marginTop: 20}} 
      />
      <Image 
        source={{uri:'http://paullab.co.kr/line.png'}}
        style={{ width:'100%',height:200,resizeMode:'center'}} 
      />
    </View> 
  )
}

function PaulLabIntro() {
  return (
  <View style={style.itemBox}> 
      <Text style={style.title}>바울랩</Text>  
      <Image 
        source={{uri:'http://paullab.co.kr/logo.png'}}
        style={{width:'100%',height:200,resizeMode:'contain'}}
      />
  </View>
  )
  
}
 
// function OtherInfo() {
//   return (
//     <View style={{...style.itemBox, alignItems:'center'}}>
//     </View>
//   )
// }

const Home = () => {
    return(
      <ScrollView style={style.container}>
        <BaseCampIntro />
        <PaulLabIntro />
        {/* <OtherInfo /> */}
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
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 0.4,
    borderColor: '#e8e8e8', 
    marginTop: 15,
    marginLeft:5,
    resizeMode: 'contain',
    alignItems:'center'
},
title:{
   fontSize: normalize(20),
   fontWeight: 'bold',
   paddingVertical:40,
   borderTopWidth:2,
   borderBottomWidth:2,
   borderColor: '#bcbcbc',
   borderRadius:25,
   marginTop:30,
   marginBottom:-30,
},
desc: {
  fontSize: normalize(15),
}
})

export default Home;