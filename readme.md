https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

https://github.com/nodemailer/nodemailer/blob/master/examples/full.js


HW
Project
Create a project to scan the files in the downloads folder and categorize them as compressed (for rar, zip, 7zip files), documents (txt, xlsx, pdf, etc.), audio and video files.

Steps:

Read the Downloads Directory: Use fs.readdir or fs.readdirSync to list all files in the downloads directory.
Categorize Files: Loop through the files, use the path module to extract file extensions, and categorize files based on their extension (path.extname() method).
Move Files: Create separate folders for each category and move files into the appropriate folder using fs.rename or fs.copyFile.


Node.js Child Processes: Everything You Need to Know 
https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

Event Loop Timers and process.nextTick
https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

libuv
https://libuv.org/

MIME Types
https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types

Node.js: Don't Block the Event Loop
https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop