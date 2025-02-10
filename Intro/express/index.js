//import the express module
const express = require("express");

//create an express application
const app = express();

//middleware
//it helps your express application undestand and work with json data sent in requests
//it automatically parses incoming JSON requests and makes the data available in req.body
//this function will be called for every incoming requests, unless you specify a path to limit it's scope 
app.use(express.json());

//serves static files such as html css js images etc. 
app.use(express.static("public"))
const loggerMiddleware = (req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}
const parseMiddleware = (req,res,next) => {
    console.log("request received for parsing", req.method, +" "+req.url);
    next();
}
app.use(loggerMiddleware);
const users = [
    { id: 1, name: "user1"},
    { id: 2, name: "user2"},
];

app.get("/users", (req,res) => {
    // res.send("Hello from Express"); // res.write() + res.end()
    let queryparams = req.query;
    console.log(queryparams);
    //on the basis of query sent , we can query the db and get results
    res.status(200).json({
        message:"All Users",
        userList : users
    })
});

app.post("/users", parseMiddleware, (req,res) => {
    let dataSentFromClientToServer = req.body;
    console.log(dataSentFromClientToServer);
    console.log("received the POST request");
    res.status(200).json({
        message:"User received",
    })
});

//route params
app.get("/users/:id", (req,res) => {
    let {id: userId} = req.params;
    console.log(typeof userId, userId);
    const user = users.find(user => user.id == userId);
    if(user){
        res.status(200).json({
        message:"User found",
        user : user
        })
    }else {
        res.status(200).json({
            message:"User not found",
            user : []
        })
    }
});

const port = 3000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
})


