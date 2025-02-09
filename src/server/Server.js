const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Para usar variáveis de ambiente

const app = express();
const PORT = process.env.PORT || 4000; // Agora você pode definir a porta via variável de ambiente

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do Nodemailer usando variáveis de ambiente para segurança
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Email definido no .env
    pass: process.env.EMAIL_PASS, // Senha de app definida no .env
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Mensagem de Contato: ${name}`,
      text: `Você recebeu uma nova mensagem de ${name} (${email}, ${phone}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Mensagem enviada com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).send("Erro ao enviar email");
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
