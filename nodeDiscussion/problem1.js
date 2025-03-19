//generate random content
// const content = Math.random().toString(36).repeat(10000000); 

//write content to file  ~ 130MB data
// fs.writeFileSync(__dirname+"/bigFile.txt", content);

const fs = require("fs");
const path = require("path");
const http = require("http");
const server = http.createServer();

server.listen(3000, () => {
    console.log("server started at port 3000");
});

server.on("request", (req, res) => {
    const readableStream = fs.createReadStream("./bigFile.txt");
    //res csn handle writable stream.
    // Http request/response, crypto, and some methods on the fs module are internally stream-enabled
    readableStream.pipe(res);

})

// solution : streaming 

const filePath = path.join(__dirname,"bigFile.txt");
console.log(filePath);
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream("copyOfBigFile.txt");

// readableStream.on("data", (chunk) =>{
//     console.log(`Recived ${chunk.length} bytes of data`);
//     writableStream.write(chunk);
// });

// readableStream.on("end", () => {
//     writableStream.end();
//     console.log("finished readin the file");
// });

//pipe -> method on readable stream . used to connect reable stream to writable stream

// readableStream.pipe(writableStream);

// readableStream.on('error', (err) => {
//     console.log("Error while reading", err);
// })

// writableStream.on('error', (err) => {
//     console.log("Error while writing", err);
// })





