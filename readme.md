https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

https://github.com/nodemailer/nodemailer/blob/master/examples/full.js


HW
Project
Create a project to scan the files in the downloads folder and categorize them as compressed (for rar, zip, 7zip files), documents (txt, xlsx, pdf, etc.), audio and video files.

Steps:

Read the Downloads Directory: Use fs.readdir or fs.readdirSync to list all files in the downloads directory.
Categorize Files: Loop through the files, use the path module to extract file extensions, and categorize files based on their extension (path.extname() method).
Move Files: Create separate folders for each category and move files into the appropriate folder using fs.rename or fs.copyFile.