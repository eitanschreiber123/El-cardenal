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
    const { senderMail, sendTo, rooms, date, payment, price, people } = req.body
    if (sendTo === "" || rooms === "" || date === "" || payment === "" || people[0] == 0) {
        res.status(403).send("")
        return
    }
    const mailerRes = await mailer({ senderMail, sendTo, rooms, date, payment, price, people })
    res.send(mailerRes)
}
const mailer = ({ senderMail, sendTo, rooms, date, payment, price, people }) => {
    const message = {
        senderMail,
        to: `${sendTo}`,
        subject: `El Cardenal Hotel`,
        text: `Thank you for your reservation
        rooms: ${rooms.map(r => `${r}, `)}
        date: ${date[0]} - ${date[1]}
        price: ${price}
        to cancel you can contact El Cardenal Hotel at (+593) 99 642 4583 or email at elcardenalhotel@gmail.com
        ${payment === `advance` ? `you will receive an email shortly to pay in advance` : ``}`,
        replyTo: senderMail
    }
    const otherMessage = {
        senderMail,
        to: `${sendTo}`,
        subject: `El Cardenal Hotel`,
        text: `una reserva
        personas: ${people[0]}
        niños: ${people[1]}
        habitaciones: ${rooms.map(r => `${r}, `)}
        cuando: ${date[0]} - ${date[1]}
        ${payment === `advance` ? `huesped quiere pagar ahora` : `huesped quiere pagar cuando ir en el hotel`}`,
        replyTo: senderMail
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
        transporter.sendMail(otherMessage, (error, info) =>
            error ? reject(error) : resolve(info)
        )
      })}
