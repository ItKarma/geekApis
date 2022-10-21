import express from "express";
import indexRouter from "./routes/router.js";

export default class App {

  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  
  routes(){
    this.app.use(indexRouter);
  }

  start(){
    this.app.listen(this.port, ()=>{
      console.log("Rurnning server..")
    })
  }
}
