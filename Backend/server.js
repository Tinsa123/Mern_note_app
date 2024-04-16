const express=require("express");
const notes = require("./data/notes");
const dotenv=require("dotenv")
dotenv.config()
const app=express();
app.get("/",(req,res)=>{
    res.send("api is running")
})
app.get("/api/notes",(req,res)=>{
    res.send(notes)
})
app.get("/api/notes/:id",(req,res)=>{
    const note=notes.find((item)=>item._id===req.params.id)
    res.send(note)
})
app.listen(process.env.Port||4000,console.log(`server starts running ${process.env.Port}`))