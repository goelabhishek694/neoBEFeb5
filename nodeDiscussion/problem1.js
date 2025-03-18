//generate random content
// const content = Math.random().toString(36).repeat(10000000); 

//write content to file  ~ 130MB data
// fs.writeFileSync(__dirname+"/bigFile.txt", content);

const fs = require("fs");
const http = require("http");
const server = http.createServer();
const path = require("path");

server.listen(3000, () => {
    console.log("server started at port 3000");
});

// server.on("request", (req, res) => {
//     fs.readFile("./bigFile.txt", (err, data) => {
//         if(err) console.log(err);
//         res.end(data);
        
//     })
// })

// solution : streaming 

const filePath = path.join(__dirname,"bigFile.txt");
console.log(filePath);
const readableStream = fs.createReadStream(filePath);

readableStream.on("data", (chunk) =>{
    console.log(`Recived ${chunk.length} bytes of data`);
});

readableStream.on("end", () => {
    console.log("finished readin the file");
});




