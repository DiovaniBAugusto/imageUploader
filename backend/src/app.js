import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {imageRouter} from './resource/imageResources.js'
import 'dotenv/config'
class App{
    app;
    constructor(){
         this.app = express();
         this.database();
         this.middleware();
         this.routes();
    }   

    middleware(){
        this.app.use(cors());
        this.app.use(express.json({limit: '10mb'}));
    }

    database(){
        mongoose.connect(process.env.DATABASE ,{}).then(()=>{
            console.log("Database connection was successful");
        }).catch((err)=>{
            console.log(err)
        });
    }

    routes(){
        this.app.use(imageRouter);
    }
}

export default new App().app;
