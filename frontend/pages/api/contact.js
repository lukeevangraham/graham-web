// USING SPARKPOST
import axios from "axios";

export default function handler(req, res) {
  let data = JSON.stringify({
    recipients: [
      {
        address: "luke.evan.graham@gmail.com",
      },
    ],
    content: {
      from: {
        email: "luke@mail.grahamwebworks.com",
        name: "Graham Web Works",
      },
      subject: "Message from grahamwebworks.com",
      text: `${req.body.name} (${req.body.email}, ${req.body.phone}) just sent this message via www.grahamwebworks.com:

        ${req.body.body}`,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.sparkpost.com/api/v1/transmissions",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.SPARKPOST_API_KEY,
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
        res.status(200).json({ status: 200 });
    })
    .catch((error) => {
      console.log(error);
    });
}

// export default function handler(req, res) {

// // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// // javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: `luke@grahamwebworks.com`, // Change to your recipient
//   from: 'luke@grahamwebworks.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: `${req.body.name} (${req.body.email}, ${req.body.phone}) just sent this message via www.grahamwebworks.com:

//   //         ${req.body.body}`,
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//       res.status(200).json({ status: 200 });
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// }



// const nodemailer = require("nodemailer");

// export default function handler(req, res) {
//   res.status(200).json({ status: 200 });

//   async function main() {
//     let transporter = nodemailer.createTransport({
//       host: "smtp.sparkpostmail.com",
//       port: "587",
//       secure: "true",
//       auth: {
//         user: "SMTP_Injection",
//         pass: process.env.SPARKPOST_API_KEY,
//       },
//     });

//     let info = await transporter.sendMail({
//       from: '"Graham Web Works" <donotreply@grahamwebworks.com>',
//       to: "luke.evan.graham@gmail.com",
//       subject: "Message from grahamwebworks.com",
//       text: `${req.body.name} (${req.body.email}, ${req.body.phone}) just sent this message via www.grahamwebworks.com:

//         ${req.body.body}`,
//     });

//     transporter.verify(function (error, success) {
//       error
//         ? console.log(error)
//         : console.log("Server is ready to take our messages", success);
//     });
//   }

//   main().catch(console.error);
// }
