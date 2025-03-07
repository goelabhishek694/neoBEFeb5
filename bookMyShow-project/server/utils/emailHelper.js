const nodemailer = require("nodemailer");
async function emailHelper(templateName, receiverEmail, creds) {
  try {
    const transportDetails = {
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "",
        pass: "",
      },
    };

    const emailDetails = {
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    };
    const transporter = nodemailer.createTransport(transportDetails);
    // send mail with defined transport object
    await transporter.sendMail(emailDetails);
  } catch (err) {
    console.log(err);
  }
}

module.exports = emailHelper;