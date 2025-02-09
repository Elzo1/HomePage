import React, { Component } from 'react';
import Servico1 from '../imgs/Servico1.jpg';
import Servico2 from '../imgs/Servico2.jpg';
import Servico3 from '../imgs/Servico3.jpg';
import Servico4 from '../imgs/Servico4.jpg';
import Servico5 from '../imgs/Servico5.jpg';
import Servico6 from '../imgs/Servico6.jpg';
import Servico7 from '../imgs/Servico7.jpg';
import Servico8 from '../imgs/Servico8.jpg';

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

export class Portifolio extends Component {
  render() {
    return (
      <div id='projetos' className='w-full'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={slideUpVariants}
          className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-center items-center gap-[20px]'
        > 
          <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>Portifolio</motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-white text-[40px] font-extrabold text-center'>Nossos Serviços</motion.h1>
          <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
          
          {/* Container das imagens */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={zoomInVariants}
            className='w-full m-auto flex justify-center items-center'
          >
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-1'> {/* Reduzi o gap para 1 (4px) */}
              {/* Imagens com tamanho reduzido e mais próximas */}
              <img src={Servico1} alt="imagem de serviços" className='max-w-[130px] h-auto' />
              <img src={Servico2} alt="imagem de serviços" className='max-w-[130px] h-auto' />
              <img src={Servico3} alt="imagem de serviços" className='max-w-[130px] h-auto' />
              <img src={Servico4} alt="imagem de serviços" className='max-w-[130px] h-auto' />
              <img src={Servico5} alt="imagem de serviços" className='max-w-[130px] h-auto' />
              <img src={Servico6} alt="imagem de serviços" className='max-w-[130px] h-auto' />
              <img src={Servico7} alt="imagem de serviços" className='max-w-[130px] h-auto' />
              <img src={Servico8} alt="imagem de serviços" className='max-w-[130px] h-auto' />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
}

export default Portifolio;