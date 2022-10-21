const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.json({ message : "hellow"});
});

app.listen(3000, ()=>{
  console.log("Servidor rodando..")
});

module.exports = app;
