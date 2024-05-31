import express from 'express'
import dotenv from 'dotenv'
import { connectToDB } from './db/index.js'

const app = express()
dotenv.config()

app.get('/',async(req,res)=>{
    await connectToDB()
    res.send("Hello")
})

const port = process.env.Port
app.listen(port,()=>console.log(`Server Started in : ${port}`))