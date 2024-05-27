require('dotenv').config();
import mongoose from 'mongoose';
import { app } from './app';
import config from './config';



const start = async() =>{
    console.log("Starting up........");
    const server = require("http").createServer(app);
    try {
        const mongodb = config.app.mongoUrl;
        mongoose.set("strictQuery", true);
        await mongoose.connect(mongodb).then((res) => {
          console.log("Connected to mongoDb sucessfully");
        });
    
      } catch (e) {
        console.log("ERROR :", e);
    }
      server.listen(process.env.port, () => {
        console.log(
          `server sttarted at port: http://${process.env.HOST_URL}:${process.env.PORT}`
        );
      });
}
start()