import * as env from '../env';

async function _getPlayList() {
        const YOUTUBE_API_KEY = env.YOUTUBE_API_KEY;
        const playListId= env.PL_PYTHON;

        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id,snippet,contentDetails&fields=items(id,snippet(title,description,thumbnails(default(url)),publishedAt),contentDetails(videoId))&playlistId=${playListId}&key=${YOUTUBE_API_KEY}`
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
            return await res.json();
        }
}
export default _getPlayList;