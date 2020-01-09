import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, ActivityIndicator} from "react-native"
import * as env from "../../env";

async function _getPlayList() {
    const YOUTUBE_API_KEY = env.YOUTUBE_API_KEY;
    const playListId= env.PLAY_LIST_ID;

    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id,snippet&fields=items(id,snippet(title))&playlistId=${playListId}&key=${YOUTUBE_API_KEY}`
    const options = {
        method: 'GET',
        headers: { 
            'Accept': 'application/json',
            'Content-Type' : 'application/json;charset=UTF-8'
        },
    }   
    let res = await fetch(url , options);
    let resOk = res && res.ok;

    if(resOk) {
        let data = await res.json();
        return data;
    }
}



const LectureIntro = () => {
    const [playList, setPlayList] = useState(null);
    
    const getPlayList = async () => {
        setPlayList(await _getPlayList());
    }

    useEffect(()=> {getPlayList()}, []);
    console.log(playList)
    
    return !playList ? (
        <View style={{alignItems: 'center', paddingTop:20, flex:1}}>
            <ActivityIndicator size='large' />
        </View> 
    ) : (
        <ScrollView>
            <View>
                <Text>리스트뿌려질예정</Text>
            </View>   
        </ScrollView>
      
    );
} 

export default LectureIntro;

