import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Contatos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setStatus("Erro ao enviar mensagem");
    }
  };

  return (
    <div id="contatos" className="bg-white w-full my-16">
      <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h1 variants={slideUpVariants} className="text-yellow-500 text-2xl">
            CONTATOS
          </motion.h1>
          <motion.h1 variants={slideUpVariants} className="text-black text-[40px] font-bold">
            Contate-nos para qualquer dúvida.
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-amber-500"></div>
          <p className="text-3xl italic text-black mt-[60px]">
            Tem alguma dúvida ou precisa de mais informações? Entre em contato conosco. Nossa equipe está pronta para te atender.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-4 w-full"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu E-mail"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Digite seu Telefone"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              rows="4"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            ></textarea>
            <motion.button
              variants={zoomInVariants}
              className="bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full"
            >
              Enviar
            </motion.button>
            {status && <p className="mt-4 text-xl text-black">{status}</p>}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contatos;
