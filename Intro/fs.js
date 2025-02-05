const fs = require("fs");

//read a file
//non-blocking file operations
// fs.readFile("f1.txt", 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

//write a file
// const content = "Hello World";
// fs.writeFile('f2.txt', content, (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
// })
//this blocks the nodejs event loop, synchronous blocking function
// fs.writeFileSync

//working with directories 

// fs.mkdir()
// fs.rmdir() 
// fs.readdir()


//fs.rename -> can be used to rename files 
// can be used to rename , move files to diff location 
// fs.rename('f1.txt','./text/newF1.txt', (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("File has been renamed");
// });

//remove or delete a file . does not remove the folder
// fs.unlink('./text/newF1.txt', (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("File has been removed");
// })

// fs.stat() -> provied info about file's stats , including it size, permissions , mod`ification timestamp

// fs.stat("text", (err, stats) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(stats.size);
//     console.log(stats.isDirectory());
// })

// fs.watch
// fs.watchFile

// const directoryName = 'my-directory';

// fs.mkdir(directoryName, (err) => {
//   if (err) {
//     console.error(`Error creating directory: ${err}`);
//   } else {
//     console.log(`Directory "${directoryName}" created successfully.`);
//   }
// });

// fs.rmdir(directoryName, (err) => {
//     if (err) {
//       console.error(`Error removing directory: ${err}`);
//     } else {
//       console.log(`Directory "${directoryName}" removed successfully.`);
//     }
//   });
//{recursive:true} -> directory and it's contents are deleted recursively

// fs.existsSync checks if a directory exists or not
const filePath = "./my-directory/f2.txt";

// if(fs.existsSync(filePath)){
//     console.log("the filepath exists");
// }
// else console.log("the filepath does not exists");


fs.access(filePath, fs.constants.F_OK, (err) => {
    if(err){
        console.log("the filepath does not exists");
        return;
    }
    console.log("the filepath exists");
})

