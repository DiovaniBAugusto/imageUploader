import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import {imageRouter} from './resource/imageResources.js'
import 'dotenv/config'


const app = express();

//db
mongoose.connect(process.env.DATABASE ,{}).then(()=>{
    console.log("Database connection was successful");
}).catch((err)=>{
    console.log(err)
});

//middleware

    app.use(cors());
    app.use(express.json({limit: '10mb'}));

//router
try{
    app.use(imageRouter);
    console.log("carregou r");
}catch(e){
    console.log("n carregou as rotas");
}



const port = process.env.PORT ?? 8080;
app.listen(port, ()=>{
    console.log(`server running in ${port}`);
})