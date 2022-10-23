
async function index(req,res){
  res.json({ message : "tudo ok"});
}

async function ytMp3(req,res){
  res.json({ message : "Object.keys()"})
}


export default { index , ytMp3 }
