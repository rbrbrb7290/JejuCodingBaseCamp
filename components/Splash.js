import React, {Component} from 'react';
import {ImageBackground, View, Text, Image} from 'react-native';

class Splash extends Component {
    render() {
    return ( 
        <View style={{flex:1}}>
        <ImageBackground  
            soucre={{uri:'https://i.pinimg.com/originals/0c/4c/91/0c4c9161c0c461b21821372c68de3fd0.png'}}
            style={{width:'100%', height:'100%'}}
        ><Text>fff</Text> 
        </ImageBackground> 
        </View>
    );
    }
}
   
export default Splash;