import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, ActivityIndicator} from "react-native"
import { getPlayList } from '../../service/DataProcessor';

// async function _getPlayList() {
//     const YOUTUBE_API_KEY = env.YOUTUBE_API_KEY;
//     const playListId= env.PLAY_LIST_ID;

//     const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id,snippet&fields=items(id,snippet(title))&playlistId=${playListId}&key=${YOUTUBE_API_KEY}`
//     const options = {
//         method: 'GET',
//         headers: { 
//             'Accept': 'application/json',
//             'Content-Type' : 'application/json;charset=UTF-8'
//         },
//     }   
//     let res = await fetch(url , options);
//     let resOk = res && res.ok;

//     if(resOk) {
//         let data = await res.json();
//         return data;
//     }
// }

function LectureIntro() {
    const [playList, setPlayList] = useState(null);
    
    const _getPlayList = async () => {
        setPlayList(await getPlayList());
    }

    useEffect(()=> {_getPlayList()}, []);
    console.log(playList)

    const renderVideo = ({item: {title, desc, img , date, videoId }}) => (
        <View>
            <Text>{title}</Text>
            <Text>{desc}</Text>
            <Text>{img}</Text>
            <Text>{date}</Text>
            <Text>{videoId}</Text>
        </View>
    )
    
    return !playList ? (
        <View style={{alignItems: 'center', paddingTop:20, flex:1}}>
            <ActivityIndicator size='large' />
        </View> 
    ) : (
        <ScrollView>
            <FlatList 
                data={playList.videoInfo}
                renderItem={renderVideo}
            />  
        </ScrollView>
      
    );
} 

export default LectureIntro;

