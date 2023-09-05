const path = require("path")
const express = require("express")
const socketIo = require("socket.io")
const http = require ("http")
var app = express()
var server = http.createServer(app)
var io = socketIo(server)

var publicPath = path.join(__dirname,"../public/")
var port = 3000

io.on('connection',(socket)=>{
    console.log("new user conected")
    socket.on("disconnect",()=>{
        console.log("user disconected")
    })
} )
app.use(express.static(publicPath))
server.listen(port,()=>{console.log(`server is on port ${port}`)})