import { ytSearch, ytDownload } from '../function/yt.js';

async function index(req,res){
  res.json({ message : "tudo ok"});
}

async function ytMp3(req,res){
  try {
    let name = req.query.name;
    ytSearch(name).then((data)=>{
      res.status(200).send(data);
    })
  } catch (error) {
    res.status(300).json({ message : "finding nothing"})
  }
}

async function ytDown(req, res) {
  try {
    let name = req.query.name;
    ytDownload(name).then((data) => {
      res.status(200).send(data);
    })
  } catch (error) {
     res.status(300).json({ message : "try again or look of a support !"})
  }
}

export default { index , ytMp3 , ytDown }
