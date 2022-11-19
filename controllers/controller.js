import { messageParams } from '../constants/resParams.js';
import { statusCode } from '../constants/statusConstats.js';
import { ytSearch, ytDownloadMp3, ytDownloadMp4 } from '../functions/yt.js';
import facto_utils from '../utils/facto_utils.js';
import factos from '../constants/factos.js'

function index(req,res){
  res.json({ message : "tudo ok"});
}

async function ytsearch (req,res) {
  let name = req.query.q
  if(!name) return res.status(301).json({ Error : messageParams.notParams })

  try {
    let data = await ytSearch(name)
    res.status(200).send(data);

  } catch (error) {
    res.status(500).json({ message : statusCode.status500 })
  }
}

async function ytDownMp3(req, res) {
  let name = req.query.q;
  if(!name) return res.status(301).json({ Error : messageParams.notParams })

  try {
    let data = await ytDownloadMp3(name);
    res.status(200).send(data);

  } catch (error) {
     res.status(500).json({ message : statusCode.status500 })
  }
}

async function ytDownMp4(req, res) {
  let name = req.query.q;
  if(!name) return res.status(301).json({ Error : messageParams.notParams })
  
  try {
    let data = await ytDownloadMp4(name);
    res.status(200).send(data);

  } catch (error) {
    res.status(500).json({ message : statusCode.status500 })
  }
}

async function fatcosRandom (req,res) {
  let count = parseInt(req.query.count) || 1;
    let useless_facts = factos.useless_facts;
    if(count > 1){
        var data = facto_utils.shuffle(useless_facts).slice(1, count);
    }
    else{
        var data = useless_facts[Math.floor(Math.random() * useless_facts.length)];
    }
    res.send({"data":data});
}
export default { index , ytsearch , ytDownMp3, ytDownMp4, fatcosRandom}
