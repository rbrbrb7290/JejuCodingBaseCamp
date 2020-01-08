import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, Button , StyleSheet,TouchableOpacity } from 'react-native';
import { } from 'react-native-gesture-handler';
/** 
 * HTML / CSS / JS강의 로드 컴포넌트  */
const WebBasicLectures =({navigation}) => {
    const [ param , setParam ]  = useState('HTML');

    return( 
        <View style={style.wrap}>
            <View style={style.categoryWrap}>
                 <TouchableOpacity style={style.categoryBtn}  
                onPress={()=> setParam('HTML')}>
                    <Text>HTML</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.categoryBtn}  
                onPress={()=> setParam('CSS')}>
                    <Text>CSS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.categoryBtn}  
                onPress={()=> setParam('JavaScript')}>
                    <Text>JS</Text>
                </TouchableOpacity>
     
            </View>
            <Text>{param}</Text>
            <ScrollView>
                <Text>*TODO FlatList in YouTube Data</Text>
            </ScrollView>
        </View>
    );  
}

export default WebBasicLectures;

const style = StyleSheet.create({
    wrap: {
        flex:1 ,
        padding: 0.3,
        backgroundColor: "#FFFFFF"
    },
    categoryWrap:{
        flex:1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        // justifyContent: 'space-between'
        
    },
    categoryBtn: {
        alignItems: 'center',
        margin: 0.5,
        paddingVertical: 10,
        width: '33%',
        borderRadius: 2, 
        borderWidth: 0.8,
        borderColor: '#dedede',
    }
})