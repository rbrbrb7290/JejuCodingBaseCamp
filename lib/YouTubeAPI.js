import * as env from '../env';

const YouTubeAPI ={
    getPlayList: async function () {
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
}