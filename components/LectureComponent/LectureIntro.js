import React, {useState, useEffect} from 'react';
import { 
   View, Text, FlatList
  ,ActivityIndicator, Image, StyleSheet, SafeAreaView, TouchableOpacity
} from "react-native";
import { getPlayList } from '../../service/DataProcessor';
import { normalize } from 'react-native-elements';

const LectureIntro = ({navigation, screenProps, title}) => {
    const [playList, setPlayList] = useState(null);
    // console.log(playList);
    
    const _getPlayList = async () => {
        setPlayList(await getPlayList(screenProps.plId));
    }
    
    useEffect(()=> {_getPlayList()}, []);

    const renderVideo = ({item: {title, img , desc, date, videoId}}) => (
        <TouchableOpacity 
            onPress={()=> navigation.navigate('LectureVideo', {
                videoId: videoId,
                title: title,
                desc: desc,     })}>
        <View style={style.itemBox}>
                <Text style={style.title}>{title}</Text>  
                <View><Image source={{uri:`${img}`}} style={{width:150, height:100 }} /></View>
                <Text numberOfLines={1} style={style.date}>{date}</Text>
               
        </View>
        </TouchableOpacity>
    )
    
    return !playList ? (
        <View style={{alignItems: 'center', paddingTop:20, flex:1}}>
            <ActivityIndicator size='large' />
        </View> 
    ) : (
        <SafeAreaView style={style.container}>
            <FlatList
              data={playList.videoInfo}
              renderItem={renderVideo}
              keyExtractor={item => item.videoId}
            />  
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex:1,
        flexWrap: 'wrap',
        flexDirection: 'row' ,
        alignItems: 'flex-start',
        justifyContent: 'center' ,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 6,
        paddingVertical: 3
    },
    itemBox: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        marginTop: 10,
        marginLeft:5,
    },
    title:{
       fontSize: normalize(14),
       fontWeight: 'bold',
       marginBottom: 5,

    },
    date: {
        color: '#8a8a8a',
        fontSize: normalize(10)
      },
    desc: {
       fontSize: normalize(10),
       color:'#8a8a8a'
    }
})

export default LectureIntro;



