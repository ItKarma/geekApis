import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
  };


async function ytSearch(url){
   return new Promise((resolve, reject) => {
    try {
      const videos = yts(url).then((data)=>{
        const youtube = data.all;
        const res = {
          result : youtube
        }
        return res;
      })
      resolve(videos);
    } catch (error) {
      reject(error);
    }
     console.log(error);
   })
}

function ytDownload(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let { contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
}


/*async function ytDownload(name){
    new Promise((resolve, reject) => {
        try {
           const searchName = yts(name)
                .then((data)=>{
                    const url = [];
                    const format = data.all;
                    for (let i = 0 ; i < format.length ; i++) {
                        if (format[i].type == 'video') {
                            let vd = format[i];
                            url.push(vd.url);
                        }
                    }

                    const ytb = ytdl.getInfo(`${url[0]}`)
                        .then((data)=>{
                            let pormat = data.formats;
                            let audios = [];
                            let video = [];
                            for (let i = 0; i < pormat.length ; i++) {
                                if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
                                  let vid = pormat[i];
                                    video.push({
                                        quality : vid.qualityLabel,
                                        url : vid.url
                                    })
                                }
                                if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
                                    let audio = pormat[i]
                                    audios.push({
                                        bitrate: audio.audioBitrate,
                                        url: audio.url
                                    })
                                }*/
                            // }
                            
                            // const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText;
                            // const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnail

export { ytSearch, ytDownload }
