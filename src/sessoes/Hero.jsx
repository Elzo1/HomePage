import React, { useState } from "react";
import ImgBackground from "../imgs/imgbackground.jpg";
import Logo from "../imgs/logo.png";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  return (
    <div 
      id="home" 
      className="relative w-full h-screen bg-black bg-cover bg-center flex flex-col lg:flex-row items-center justify-between px-5 lg:px-40 pt-16" 
      style={{ backgroundImage: `url(${ImgBackground})` }} 
    >
      {/* Conteúdo principal */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="lg:w-3/4 w-full flex flex-col items-start text-white"
      > 
        <h1 className="text-yellow-500 text-2xl">Bem-vindo à HMSat</h1> 
        <h2 className="text-3xl lg:text-5xl font-bold uppercase">Sua jornada, nossa proteção.</h2> 
        <p className="text-lg mt-4"> 
          A HMSat nasceu da paixão por inovação e da busca por soluções que superassem as expectativas dos clientes. 
          Nossa missão é oferecer um serviço de rastreamento veicular completo, ajudando você a proteger seus ativos, 
          reduzir custos e otimizar suas operações. 
        </p> 
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="mt-6 px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-white hover:text-black" 
          onClick={() => document.getElementById("servicos").scrollIntoView({ behavior: "smooth" })} 
        >
          Saiba Mais
        </motion.button> 
      </motion.div>

      {/* Logo */}
      <motion.img 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        src={Logo} 
        alt="logo" 
        className="lg:w-1/2 w-3xl mt-10 lg:mt-0" 
      />

      {/* Ícone do WhatsApp com animação */}
      {isPopupVisible && (
        <motion.div 
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
        >
          {/* Pop-up */}
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: [1, 1.05, 1] }} // Reduzido o efeito de escala
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} // Adicionado ease para suavizar a animação
            className="bg-white p-2 rounded-lg shadow-lg mb-2 flex items-center gap-2 relative" 
          > 
            {/* Texto e número */}
            <div className="pl-2"> 
              <span className="text-xs text-gray-800">Solicitar Orçamento</span> 
              <span className="bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center ml-1"> 
                1 
              </span> 
            </div>

            {/* Botão de fechar (X) */}
            <button 
              onClick={() => setIsPopupVisible(false)} 
              className="absolute top-1 right-1 text-gray-600 hover:text-red-500 transition-colors" 
            >
              <IoClose size={18} /> 
            </button>
          </motion.div>

          {/* Botão do WhatsApp */}
          <motion.div 
            className="bg-green-500 p-4 rounded-full shadow-lg cursor-pointer" 
            initial={{ scale: 1 }} 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} 
            onClick={() => window.open("https://wa.me/+55749991925583", "_blank")} 
          >
            <FaWhatsapp size={32} className="text-white" /> 
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;