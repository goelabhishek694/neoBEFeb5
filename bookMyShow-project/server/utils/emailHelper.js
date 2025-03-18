const nodemailer = require("nodemailer");
const path = require("path");
const https = require("https");
const axios = require("axios");
const fs = require("fs");
require("dotenv").config({path: "../.env"});
const {RESEND_API_KEY} = process.env;
console.log(RESEND_API_KEY);
const API_URL = "https://api.resend.com/emails";

function replaceContent(content, creds){
  let allKeys = Object.keys(creds); //[name,otp];
  allKeys.forEach((key)=> {
    console.log(key);
    
    content = content.replace(`##{${key}}`, creds[key])});
  return content
}
async function emailHelper(templateName, receiverEmail, creds) {
  try {
    const templatePath = path.join(__dirname,"email_templates", templateName+".html");
    let content = await fs.promises.readFile(templatePath,"utf-8");
    const transportDetails = {
      host: "smtp.resend.com",
      port: 587,
      auth: {
        user: "resend",
        pass: RESEND_API_KEY,
      },
    };

    const emailDetails = {
      from: 'onboarding@resend.dev', // sender address
      to: "abhishek.goel_1@scaler.com", // list of receivers
      subject: "Mail from ScalerShows", // Subject line
      text: `Hi ${creds.name} this is your reset otp ${creds.otp}`, // plain text body
      html:replaceContent(content, creds), // html body
      attachments: [        
        {
          filename: 'notes.txt',
          content: 'Some notes about this e-mail',
          contentType: 'text/plain' // optional, would be detected from the filename
      },
      {
        filename: 'image.jpg',
        path: __dirname + '/image.jpg',
        // cid: 'nyan@example.com' // should be as unique as possible
    }

]
    };
    const transporter = nodemailer.createTransport(transportDetails);
    // send mail with defined transport object
    
    await transporter.sendMail(emailDetails);

    // const response = await axios.post(
    //   API_URL,
    //   {
    //     from: "onboarding@resend.dev",
    //     to: "abhishek.goel_1@scaler.com",
    //     subject: "Mail from ScalerShows",
    //     text: `Hi ${creds.name} this is your reset otp ${creds.otp}`, // plain text body
    //     html: replaceContent(content, creds),
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${RESEND_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    //   }
    // );
    console.log("Email sent successfully:", response?.data);
  } catch (err) {
    console.error("Error sending email:", err.response?.data || err.message);
  }
}

emailHelper("otp","abhishegoel@gofynd.com",{"name":"Surya", "otp":"1234"});
module.exports = emailHelper;