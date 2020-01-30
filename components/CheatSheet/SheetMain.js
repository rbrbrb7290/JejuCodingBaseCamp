import React from 'react'
import {useState, useEffect} from 'react';
import { View, Text, FlatList, Modal, StyleSheet,TouchableOpacity, Button, Dimensions} from 'react-native'
import data from '../tool/data';
import { normalize } from 'react-native-elements';
import Admob from '../Admob';
import { ScrollView } from 'react-native-gesture-handler';
const SheetMain = ({navigation})=>{
    
    const _renderItem = ({item:{imglink, name}}) =>(
        <TouchableOpacity
        onPress={()=> navigation.navigate('Sheet',{name:name, imglink:imglink})}>
            <View style={style.content}>
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
        <View  style={style.container}>
             <Text style={style.title}>치트시트</Text>
            <ScrollView style={{height:'65%'}}>
                <FlatList
                    data = {DATA}
                    renderItem = {({item})=><_renderItem item={item}/>}
                    numColumns={3}
                    style={{marginBottom:50}}
                    />
                     <FlatList
                    data = {DATA}
                    renderItem = {({item})=><_renderItem item={item}/>}
                    numColumns={3}
                    style={{marginBottom:50}}
                    />
            </ScrollView>
            <View style={{flex:1}}>
                <Admob/>
            </View>
        </View>
    )
}
export default SheetMain


const style = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
    },
    content:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        borderWidth: 0.3,
        borderColor: '#BCBCBC',
        minWidth:'31%',
        height:120,
        marginVertical:4,
        marginHorizontal:3,
        elevation:5
    },
    sheetName:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: normalize(13)
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 17,
        fontWeight: 'bold' , 
        color: '#6e6e6e',
        marginTop: 10,
        fontWeight:'bold',
        fontSize: normalize(18)
      },
})