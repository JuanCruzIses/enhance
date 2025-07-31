import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { nombre, edad, telefono, objetivo } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'juancruzises@gmail.com',
      subject: 'Nuevo formulario de asesoría',
      text: `Nombre: ${nombre}\nEdad: ${edad}\nTeléfono: ${telefono}\nObjetivo: ${objetivo}`,
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Error al enviar el correo.' });
  }
}
