import React from 'react'
import { View, Text, FlatList, StyleSheet,TouchableOpacity, Linking} from 'react-native'
import { normalize } from 'react-native-elements';
import json from '../json/license'

const SheetMain = ({navigation})=>{
    
    const _renderItem = ({item}) =>(
        <TouchableOpacity
        onPress={()=> Linking.openURL(item.agreement)}>
            <View style={style.content}>
                <Text style={style.sheetName}>
                    {item.name}
                </Text>
                <Text>
                    {item.license}
                </Text>
            </View>
        </TouchableOpacity>
    )
    const DATA = Object.values(json.license)

    
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
        height:normalize(100),
        borderColor: '#BCBCBC'
    },
    sheetName:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: normalize(20)
    }
})