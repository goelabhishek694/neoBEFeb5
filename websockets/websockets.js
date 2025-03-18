const express = require("express");
const http = require("http");
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("a user is connected", socket.id);
    
    //send a message from the server to client
    socket.emit("server_message", "Welcome to the WS server !!");

    //handle incoming messages from client
    socket.on("client_message", (msg) => {
        console.log("Message from client ", msg);
        //Broadcast the message to all the connected client
        io.emit("server_message", msg);
    })

    socket.on("disconnect", () => {
        console.log("user disconnected ", socket.id);
    })
});


app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
});

server.listen(3000, () => console.log("listening on port 3000"));

