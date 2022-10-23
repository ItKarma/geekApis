import yts from 'yt-search';

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

export { ytSearch }
