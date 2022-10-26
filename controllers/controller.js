import { ytSearch, ytDownloadMp3, ytDownloadMp4 } from '../functions/yt.js';

function index(req,res){
  res.json({ message : "tudo ok"});
}

function ytsearch(req,res){
  try {
    let name = req.query.q
    ytSearch(name).then((data)=>{
      res.status(200).send(data);
    })
  } catch (error) {
    res.status(300).json({ message : "finding nothing"})
  }
}

function ytDownMp3(req, res) {
  try {
    let name = req.query.q;
    ytDownloadMp3(name).then((data) => {
      res.status(200).send(data);
    })
  } catch (error) {
     res.status(300).json({ message : "try again or look of a support !"})
  }
}

function ytDownMp4(req, res) {
  try {
    let name = req.query.q;
    ytDownloadMp4(name)
      .then((data)=>{
        res.status(200).send(data);
    })
  } catch (error) {
    res.status(300).json({ message : "try again or look of a support !"})
  }
}

export default { index , ytsearch , ytDownMp3, ytDownMp4}
