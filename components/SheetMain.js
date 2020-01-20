import React from 'react'
import {useState, useEffect} from 'react';
import { View, Text, FlatList, Modal, StyleSheet,TouchableOpacity, Button, Dimensions} from 'react-native'
import ImageViewr from 'react-native-image-zoom-viewer'
import data from './tool/data';
import { createNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const SheetMain = ({navigation})=>{
    
    const _renderItem = ({item:{imglink, name}}) =>(
        <TouchableOpacity
        onPress={()=> navigation.navigate('Sheet',{name:name, imglink:imglink})}>
            <View style={style.container}>
                <Text style={style.sheetName}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
    const [SheetList, setSheetList] = useState("")
    const setSheet = async () => {setSheetList(await data("sheet"))}
    const DATA = Object.values(SheetList)
    useEffect(()=> {setSheet()},[])
    return (
        <View>
            <FlatList
                data = {DATA}
                renderItem = {({item})=><_renderItem item={item}/>}
            />
        </View>
    )
}
export default SheetMain


const style = StyleSheet.create({
    
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        borderWidth: 0.3,
        borderColor: '#BCBCBC',
        marginTop: 10,
        marginHorizontal:10,
        height:100
    },
    sheetName:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:40
    }
})