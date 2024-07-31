require('dotenv').config();
import mongoose from 'mongoose';
import { app } from './app';
import config from './config';



const start = async() =>{
    console.log("Starting up........");
    const server = require("http").createServer(app);
      server.listen(8080, () => {
        console.log(
          `server sttarted at port: http://aryalspace.com `
        );
      });
}
start()
