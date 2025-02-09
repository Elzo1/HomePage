// animation.js

// Definição das variantes de animação para o efeito de deslizar para cima (slide up)
export const slideUpVariants = {
    hidden: { y: 50, opacity: 0 }, // Inicia 50px abaixo e totalmente transparente
    visible: {
      y: 0, // Posição final: no lugar original (sem deslocamento vertical)
      opacity: 1, // Torna-se totalmente visível
      transition: {
        staggerChildren: 1.4, // Define um atraso de 2s entre a animação de cada filho (se aplicável)
        duration: 1.3, // Duração da animação: 1.5 segundos
        ease: "easeOut", // Tipo de easing: suaviza o final da animação
      },
    },
  };
  
  // Definição das variantes de animação para o efeito de zoom in
  export const zoomInVariants = {
    hidden: { scale: 0.5, opacity: 0 }, // Inicia com metade do tamanho e totalmente transparente
    visible: {
      scale: 1, // Tamanho final: escala original (100%)
      opacity: 1, // Torna-se totalmente visível
      transition: {
        staggerChildren: 1.5, // Define um atraso de 2s entre a animação de cada filho (se aplicável)
        duration: 1.2, // Duração da animação: 1.2 segundos
        ease: "easeOut", // Tipo de easing: suaviza o final da animação
      },
    },
  };