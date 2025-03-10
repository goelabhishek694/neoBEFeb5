const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv").config({path: "../.env"});
const {SENDGRID_API_KEY} = process.env;

function replaceContent(content, creds){
  let allKeys = Object.keys(creds); //[name,otp];
  allKeys.forEach((key)=> {
    content = content.replace(`##${key}`, creds[key])});
  return content
}
async function emailHelper(templateName, receiverEmail, creds) {
  try {
    const templatePath = path.join(__dirname,"email_templates", templateName+".html");
    let content = await fs.promises.readFile(templatePath,"utf-8");
    const transportDetails = {
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: SENDGRID_API_KEY,
      },
    };

    const emailDetails = {
      from: 'abhishek.goel_1@scaler.com', // sender address
      to: receiverEmail, // list of receivers
      subject: "Mail from ScalerShows", // Subject line
      text: `Hi ${creds.name} this is your reset otp ${creds.otp}`, // plain text body
      html:replaceContent(content, creds) // html body
    };
    const transporter = nodemailer.createTransport(transportDetails);
    // send mail with defined transport object
    await transporter.sendMail(emailDetails);
  } catch (err) {
    console.log(err);
  }
}

emailHelper("otp","goelabhishek694@gmail.com",{"name":"Krishan", "otp":"1234"});

module.exports = emailHelper;