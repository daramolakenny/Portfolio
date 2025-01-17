import express, { response, text } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({limit: "25mb"}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    const mail_configs = {
      from: process.env.USER,
      to: email,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: 'An error occurred', error });
      }

      return resolve({ message: 'Email sent successfully' });
    });
  });
}

app.get("/Portfolio", (req, res) => {
    sendEmail(req.query)
    .then((response) => response.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`nodemailer is running on http://localhost:${port}`);
});