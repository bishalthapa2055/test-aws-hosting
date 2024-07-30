require('dotenv').config();
import mongoose from 'mongoose';
import { app } from './app';
import config from './config';



const start = async() =>{
    console.log("Starting up........");
    const server = require("http").createServer(app);
      server.listen(process.env.port, () => {
        console.log(
          `server sttarted at port: http://${process.env.HOST_URL}:${process.env.port || 8080} `
        );
      });
}
start()
