import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const body = await request.json()

  // Configurar el transporter de nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Enviar el email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Nuevo mensaje de contacto',
      text: `
        Nombre: ${body.name}
        Email: ${body.email}
        Mensaje: ${body.message}
      `,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Mensaje:</strong> ${body.message}</p>
      `,
    })

    return NextResponse.json({ message: 'Mensaje enviado con éxito' })
  } catch (error) {
    console.error('Error al enviar el email:', error)
    return NextResponse.json({ message: 'Error al enviar el mensaje' }, { status: 500 })
  }
}
