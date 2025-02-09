import React from "react";
import { motion, useAnimation } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Services = () => {
  const plan = {
    title: "Rastreamento Veicular Completo",
    description:
      "Ser uma empresa líder em soluções de rastreamento de veículos, reconhecida pela inovação, confiabilidade e excelência em serviço.",
    features: [
      "Localização em tempo real",
      "Bloqueio/desbloqueio (via app ou web)",
      "Notificação de carro ligado",
      "Notificação de carro fora do raio",
      "Trajetos percorridos",
      "Deslocamentos e paradas",
      "Gerenciamento de ponto de parada",
      "Gerenciamento de rotas",
      "Cerca virtual",
    ],
  };

  // Controle da animação de borda piscando
  const borderControls = useAnimation();

  // Função para iniciar a animação de borda piscando
  const startBorderBlink = async () => {
    await borderControls.start({
      borderColor: ["#ffffff", "#f59e0b", "#ffffff", "#f59e0b", "#ffffff"], // Alterna entre transparente e amarelo
      transition: {
        duration: 0.3, // Duração mais curta para maior intensidade
        repeat: 3, // Repete 3 vezes (total de 4 piscadas)
        repeatType: "mirror", // Alterna suavemente entre as cores
      },
    });
  };

  return (
    <div id="servicos" className="w-full bg-white py-[60px] flex flex-col items-center">
      {/* Cabeçalho animado */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-black text-[40px] font-extrabold text-center mb-8"
      >
        Planos
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] flex lg:flex-row flex-col justify-center items-center gap-[50px]"
      >
        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          onAnimationComplete={startBorderBlink} // Inicia a animação de borda após a animação de entrada
          animate={borderControls} // Aplica a animação de borda
          className="bg-white p-6 rounded-lg shadow-md text-black max-w-[400px] w-full 
                     border-4 border-transparent hover:border-yellow-500 transition-all" // Aumentei a espessura da borda para 4px
        >
          <h2 className="text-xl font-bold text-center">{plan.title}</h2>
          <p className="text-gray-700 text-center mt-4">{plan.description}</p>
          <ul className="mt-6 space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-800">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Texto ao lado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[50%] w-full text-black text-center lg:text-left"
        >
          <h1 className="text-2xl font-bold text-yellow-500">
            Proteção veicular sob medida para você
          </h1>
          <p className="text-lg mt-4 max-w-[500px]">
            Na HMSat, você encontra a proteção ideal para o seu veículo, com planos personalizados que cabem no seu bolso.
            Com mais de [número] anos de experiência no mercado, a HMSat oferece soluções completas e confiáveis. 
            Não abra mão da segurança do seu carro. Escolha HMSat e tenha mais tranquilidade no seu dia a dia.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;