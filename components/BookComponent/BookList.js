import React from 'react'
import {useState, useEffect} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking} from 'react-native'
import data from '../tool/data';

const _renderItem = ({item}) =>{
    return (
        <View>

        <TouchableOpacity  style={{
            flex: 1,
            flexDirection:'column',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            backgroundColor: '#FFFFFF',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 7,
            borderWidth: 0.3,
            borderColor: '#BCBCBC',
            marginTop: 10,
            marginHorizontal:10}}
            onPress={()=>Linking.openURL(item.link)}
            >
            <Image
            source={{uri:item.image}}
            style={{flex:1,height:400, width:"100%",resizeMode:"contain"}}
            />
        </TouchableOpacity>
        <View style={{
            flex: 1,
            flexDirection:'column',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            backgroundColor: '#FFFFFF',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 7,
            borderWidth: 0.3,
            borderColor: '#BCBCBC',
            marginTop: 10,
            marginHorizontal:10}}>
                
                <Text  style={{justifyContent:"center"}}>책 정보</Text>
                <Text style={{flex:1,fontWeight:'bold',fontSize:25}}>{item.name}</Text>
                <Text style={{flex:1, marginTop:10, fontSize:17}}>{item.desc}</Text>
            </View>
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