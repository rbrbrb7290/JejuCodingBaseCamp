import React from 'react'
import {useState, useEffect} from 'react';
import { View, Text, FlatList, Image} from 'react-native'
import data from '../tool/data';
import { SafeAreaView } from 'react-native-safe-area-context';

  


const _renderItem = ({item}) =>{
    return (
        <View  style={{
            flex: 1,
            flexDirection:'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            backgroundColor: '#FFFFFF',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 7,
            borderWidth: 0.3,
            borderColor: '#BCBCBC',
            marginTop: 10,
            marginLeft:5}}>
            <Image
            source={{uri:item.image}}
            style={{flex:2,height:'100%', width:'100%', resizeMode:"contain"}}/>
            <Text style={{flex:1,fontWeight:'bold'}}>{item.name}</Text>
            <Text style={{flex:1}}>{item.desc}</Text>
        </View>
    )
}

export default function BookList(){
    
const [booklist, setbooklist] = useState("")
const setbook = async () => {setbooklist(await data("booklist"))}
const DATA = Object.values(booklist)

useEffect(()=> {setbook()},[])
    return (
        <View>
            <FlatList
                data = {DATA}
                renderItem = {({item})=><_renderItem item={item}/>}
            />
        </View>
    )
}