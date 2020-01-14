import React, {useState, useEffect} from 'react';
import { 
   View, Text, FlatList
  ,ActivityIndicator, Image, StyleSheet, SafeAreaView, TouchableOpacity 
} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import { getPlayList } from '../../service/DataProcessor';
import { getActiveChildNavigationOptions } from 'react-navigation';

const icon = <Icon name="menu" size={32} />
const LectureIntro = ({navigation, screenProps, title}) => {
    const [playList, setPlayList] = useState(null);
    const _getPlayList = async () => {
        setPlayList(await getPlayList(screenProps.plId));
    }
    console.log(screenProps.plId)
    console.log(screenProps.title)
    useEffect(()=> {_getPlayList()}, []);
    const renderVideo = ({item: {title, img , date, videoId}}) => (
        <View style={videoStyle.itemBox}>
            <Text style={videoStyle.title}>{title}</Text>
            <Image source={{uri:`${img}`}} style={{width:160, height:100}} />
            <Text>{date}</Text>
        </View>
    )
    
    return !playList ? (
        <View style={{alignItems: 'center', paddingTop:20, flex:1}}>
            <ActivityIndicator size='large' />
        </View> 
    ) : (
        <SafeAreaView style={{flex:1}}>
            <FlatList
                data={playList.videoInfo}
                renderItem={renderVideo}
                keyExtractor={item => item.videoId}
                onPress = {()=> console.log(videoId)}
            />  
        </SafeAreaView>
    );
}

const videoStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderWidth:1,
    },
    itemBox: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        borderWidth: 0.3,
        borderColor: '#BCBCBC',
        marginTop: 10,
        marginLeft:5
    },
    title:{

    }



})

export default LectureIntro;



