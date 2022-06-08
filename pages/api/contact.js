import nodemailer from "nodemailer";


export default async (req, res) => {
    const { Name, Email, Message } = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  const data={ from: Email,
      to: "nfx.gilo@gmail.com",
      subject: `Contact form submission from ${Name}`,
        html: `<h1>${Name} Have contacted you</h1>
        <p>You have a contact form submission</p><br>
          <p><strong>Email: </strong> ${Email}</p><br>
          <p><strong>Message: </strong> ${Message}</p><br>
        `}
  
        transporter.sendMail(data, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info)
        })
  };