//import the express module
const express = require("express");

//create an express application
const app = express();

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


