import  _getPlayList  from '../lib/YouTubeAPI';

async function getPlayList() {
        let res;
        console.log('start')
        try {
            res = await _getPlayList();
        } catch (error) {
            res = await _getPlayList();
        }finally{
            if(!res) return res;
            return {
                videoInfo: res['items'].map(row => ({
                    title: row['snippet']['title'],
                    desc: row['snippet']['description'],
                    img: row['snippet']['thumbnails']['default']['url'],
                    date: row['snippet']['publishedAt'],
                    videoId: row['contentDetails']['videoId']
                }))
            };
        }
}

export { getPlayList }