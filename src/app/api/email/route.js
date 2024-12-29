import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: Number(465),
            secure: true,
            auth: {
                user: 'eitanschreiber97@gmail.com',
                pass: 'jshi snqm gshy gojf',
            },
            tls: { rejectUnauthorized: false },
        });

        // Handle the original form data
        if (body.rooms && body.date && body.payment && body.price && body.people && body.food && body.name && body.number) {
            const { sendTo, rooms, date, payment, price, people, food, name, number } = body;

            const info = await transporter.sendMail({
                from: 'eitanschreiber97@gmail.com',
                to: sendTo,
                subject: 'El Cardenal Hotel',
                text: `Thank you for your reservation
                rooms: ${rooms.map(r => r.number.toString())}
                date: ${date[0]} - ${date[1]}
                price: ${price}
                to cancel you can contact El Cardenal Hotel at (+593) 99 642 4583 or email at elcardenalhotel@gmail.com
                ${payment === `advance` ? `you will receive an email shortly to pay in advance` : ``}`,
            });

            const other = await transporter.sendMail({
                from: 'eitanschreiber97@gmail.com',
                to: 'eitanschreiber97@gmail.com',
                subject: 'El Cardenal Hotel',
                text: `una reserva
                personas: ${people[0]}
                niños: ${people[1]}
                habitaciones: ${rooms.map(r => r.number.toString())}
                cuando: ${date[0]} - ${date[1]}
                desayuno: ${food}
                ${payment === `advance` ? `huesped quiere pagar ahora` : `huesped quiere pagar cuando ir en el hotel`}
                email de huesped: ${sendTo}
                nombre: ${name}
                numbero: ${number}`,
            });

            return NextResponse.json({ message: 'Email sent successfully', info, other }, { status: 200 });
        }

        // Handle the new form data
        if (body.name && body.email && body.message) {
            const { name, email, message } = body;

            const info = await transporter.sendMail({
                from: 'eitanschreiber97@gmail.com',
                to: 'eitanschreiber97@gmail.com',
                subject: `New Inquiry from ${name}`,
                text: `Name: ${name}
                Email: ${email}
                Message: ${message}`,
            });

            return NextResponse.json({ message: 'Inquiry email sent successfully', info }, { status: 200 });
        }

        return NextResponse.json({ message: 'Invalid request data' }, { status: 400 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }
}