//Child Process -> allows us to perform ops in separate processes, usefule for cpu intensive tasks or lower level system interactions

//1. Exec
// runs a shell command and return the o/p after the task is done

const { exec } = require("child_process");
//spawns a shell and executes the given command , list files in human readable format
// exec('ls -lh', (error, stdout, stderr) => {
//     if(error){
//         //if something is wrog with the command
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     //error in execution
//     console.error(`stderr: ${stderr}`);
// });

//2. exec file
// executes and executable file directly

// const {execFile} = require("child_process");
// const scriptPath = "./script.sh";
// const args = ['arg1', 'arg2'];

// execFile(scriptPath, args, (error, stdout, stderr) => {
//     if(error){
//         console.error(`execution error: ${error}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     //error in execution
//     console.error(`stderr: ${stderr}`);
// })

//3. Spawn
//launches a new process and streams the ouput and err streams
const cp = require("child_process");

cp.spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "https://www.youtube.com/",
  "--incognito",
]);

//4. Fork
// creates a new instance of Nodejs to run a module in a new process , allowing inter process communication (IPC)
const {fork} = require("child_process");
const express = require('express');
const cors = require('cors');
const app = express();
const path = require("path");
app.use(cors());


app.get("/fib", (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler fn ran for req", requestNumber);
  if (!number || isNaN(number) || number <= 0) {
    return res
      .status(400)
      .json({ error: "Please provide a valid positive number." });
  }
  const fiboRes = fork(path.join(__dirname, "cpu.js"));
  //sending data to child
  fiboRes.send({ number: parseInt(number, 10) });
  fiboRes.on("message", (answer) => {
    console.log("message received from worker", answer);
    res.status(200).json({
      status: "success",
      message: answer,
      requestNumber,
    });
    fiboRes.kill();
  });

  fiboRes.on("error", (err) => {
    res.status(500).json({
        status: "internal error",
        message: err.message
      });
  })
  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
