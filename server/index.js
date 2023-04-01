import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
// import bodyParser from "body-parser";
import DefaultData from "./default.js";
import router from "./Routes/routes.js";

const app=express();
dotenv.config();
const port=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router);


app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})

DefaultData();