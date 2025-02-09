import React, { useRef } from 'react';
import videoSrc from '../imgs/video.mp4'; // Importe o vídeo corretamente
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const AbountSobre = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handlePause = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[80px] flex lg:flex-row flex-col 
                 justify-center items-center gap-[50px] min-h-[90vh]"
      id="sobre"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[50%] w-full flex flex-col justify-center items-center 
                   text-center gap-6"
      >
        <motion.h1 variants={slideUpVariants} className="text-yellow-500 text-2xl">
          Bem-vindo à HMSat
        </motion.h1>

        <motion.h1 variants={slideUpVariants} className="text-white text-4xl font-bold">
          HMSat Rastreamento Veicular
        </motion.h1>

        <div className="w-[120px] h-[6px] bg-yellow-500"></div>

        <motion.p
          variants={slideUpVariants}
         className="text-white font-bold text-center leading-relaxed max-w-[500px]"
        >
          "A HMSat é uma empresa que nasceu da confiança em nossa capacidade de 
          transformar o mercado de rastreamento veicular. Com uma equipe altamente 
          qualificada e focada em resultados, oferecemos soluções personalizadas para 
          atender às suas necessidades específicas. Nossa experiência e conhecimento 
          nos permitem construir parcerias duradouras e confiáveis."
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="lg:w-[40%] w-full flex justify-center"
        onViewportEnter={handlePlay}
        onViewportLeave={handlePause}
      >
        <video
          ref={videoRef}
          className="w-full max-w-[300px] rounded-[15px] h-auto" // Reduzido para 80% do tamanho original (500px * 0.8 = 400px)
          controls
          muted
        >
          <source src={videoSrc} type="video/mp4" /> {/* Use a variável importada */}
          Seu navegador não suporta vídeos.
        </video>
      </motion.div>
    </div>
  );
};

export default AbountSobre;