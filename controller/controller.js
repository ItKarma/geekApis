import { ytSearch } from '../function/yt.js';

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
    res.status(300).json({ message : "Nao encontrei nada"})
  }
}


export default { index , ytMp3 }
