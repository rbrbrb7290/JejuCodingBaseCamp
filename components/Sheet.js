import React from 'react'
import {useState, useEffect} from 'react';
import { View, Text, FlatList, Modal, StyleSheet,TouchableOpacity, Button, Dimensions} from 'react-native'
import ImageViewr from 'react-native-image-zoom-viewer'
import data from './tool/data';
import { createNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SheetMain from './SheetMain';
const Sheet = ({navigation})=>
{
    const linkList = navigation.getParam('imglink')
    let img = []
    linkList.split(',').forEach(e => {
        img.push({url:e})
    });    
    return (
        <View style={{flex:1}}>
            
            <Button title="닫기" onPress={()=>navigation.goBack()}/>
            <ImageViewr style={{width:Dimensions.get('screen').width,height:Dimensions.get('window').height, resizeMode:"contain"}}
            imageUrls={img}/>
        </View>
        
    )
}
export default Sheet
