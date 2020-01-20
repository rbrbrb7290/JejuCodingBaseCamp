import React, {Component} from 'react';
import {ImageBackground, View, Image} from 'react-native';

const Splash = () => (
  <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
    <Image 
      source={require('./../images/splash.png')}
      style={{width: '100%', height: '100%'}}
    ></Image>
  </View>  
)

export default Splash;