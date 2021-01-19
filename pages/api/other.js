import nodemailer from "nodemailer"
const emailPass = "qbmD6Zs8Qv76b96"
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "eitanschreiber97@gmail.com",
        pass: emailPass
    },
    tls: {
        rejectUnauthorized: false
    }
  })
export default async (req, res) => {
    const { senderMail, name, origin, affair, message } = req.body
    if (name === "" || origin === "" || affair === "" || message === "") {
        res.status(403).send("")
        return
    }
    const mailerRes = await mailer({ senderMail, name, origin, affair, message })
    res.send(mailerRes)
}
const mailer = ({ senderMail, name, origin, affair, message }) => {
    const emailBody = {
        senderMail,
        to: `${senderMail}`,
        subject: `Message`,
        text: `name: ${name}
        affair: ${affair}
        message: ${message}`,
        replyTo: origin
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail(emailBody, (error, info) =>
            error ? reject(error) : resolve(info)
        )})}
