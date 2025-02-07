//import the express module
const express = require("express");

//create an express application
const app = express();

app.get("/", (req,res) => {
    res.send("Hello from Express"); // res.write() + res.end()
});

app.get("/trendingSongs", (req,res) => {
    res.send("List of trending Songs");
});

const port = 3000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
})


