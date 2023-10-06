import fs from "fs";
import http from "http";
import express from "express"

const fileData = fs.readFileSync("message.txt", "utf-8");
const productData = fs.readFileSync("productsData.json", "utf-8");

const server = express();

server.get("/", (req , res)=>{
    res.header("name","ahsan").send("<h1>Get Request</h1>");
})
server.put("/", (req , res)=>{
    res.header("name","ahsan").send("<h1>PUT Request</h1>");
})
server.post("/", (req , res)=>{
    res.header("name","ahsan").send("<h1>POST Request</h1>");
})
server.delete("/", (req , res)=>{
    res.header("name","ahsan").send("<h1>DELETE Request</h1>");
})
server.patch("/", (req , res)=>{
    res.header("name","ahsan").send("<h1>PATCH' Request</h1>");
})


server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})

