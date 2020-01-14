import  _getPlayList  from '../lib/YouTubeAPI';

async function getPlayList(plId) {
        let res;
        try {
            res = await _getPlayList(plId);
        } catch (error) {
            res = await _getPlayList(plId);
        }finally{
            if(!res) return {};
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