const nodemailer = require("nodemailer");

export default function handler(req, res) {
  res.status(200).json({ status: 200 });

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "mail.gandi.net",
      port: "465",
      secure: "true",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: '"Graham Web Works" <donotreply@grahamwebdesign.com>',
      to: "luke.evan.graham@gmail.com",
      subject: "Message from grahamwebworks.com",
      text: `${req.body.name} (${req.body.email}, ${req.body.phone}) just sent this message via www.grahamwebworks.com:
        
        ${req.body.body}`,
    });

    transporter.verify(function (error, success) {
      error
        ? console.log(error)
        : console.log("Server is ready to take our messages", success);
    });
  }

  main().catch(console.error);
}
