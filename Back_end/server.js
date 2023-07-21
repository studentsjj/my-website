const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();

var corsOption ={
  origin:['https://studentsjj.github.io', 'http//localhost:5000']
}
app.use(cors());
app.use(express.json());
app.use("/my-website", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
   // port : 465,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
  },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", cors(corsOption), (req, res) => {
    const name = req.body.name;
    const firstname = req.body.firstname;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "contactform.studentsjj@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
              <p>Firstname :${firstname}</p>
              <p>Email: ${email}</p>
              <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });