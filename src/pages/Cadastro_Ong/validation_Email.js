let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD
  }
})
//transporter code block

const {_id, email} = result;
const currentURL = "https://enigmatic-meadow-80878.herokuapp.com/";
const uniqueString = uuidv4() + _id;

const mailOptions = {
    from: "talk2ajur@gmail.com",
    to: email,
    subject: "Verify your email",
    html: `<p>Verify your email address to complete
            your signup</p>
            <p>This link <b> expires in 6 hours</b>.</p>
            <p> Click <a href =${currentURL+"user/verify/"+_id+"/"+uniqueString}> here</a>
            to proceed.</p>`
}

transporter.sendMail(mailOptions);