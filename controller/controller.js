import { ytSearch, ytDownloadMp3, ytDownloadMp4 } from '../function/yt.js';

function index(req,res){
  res.json({ message : "tudo ok"});
}

function Search(req,res){
  try {
    let name = req.query.name;
    ytSearch(name).then((data)=>{
      res.status(200).send(data);
    })
  } catch (error) {
    res.status(300).json({ message : "finding nothing"})
  }
}

function ytDownMp3(req, res) {
  try {
    let name = req.query.name;
    ytDownload(name).then((data) => {
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

export default { index , Search , ytDownMp3, ytDownMp4}
