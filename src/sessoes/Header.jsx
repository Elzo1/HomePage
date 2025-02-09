import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logoHMSat11 from '../imgs/logoHMSat11.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderDark, setIsHeaderDark] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Sobre", path: "sobre" },
    { link: "Serviços", path: "servicos" },
    { link: "Portfólio", path: "projetos" },
    { link: "Contato", path: "contatos" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  // Função para verificar a cor de fundo da seção atual
  const checkBackgroundColor = () => {
    const sections = document.querySelectorAll("section");
    let isDark = false;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) { // Verifica se a seção está na área visível
        const bgColor = window.getComputedStyle(section).backgroundColor;
        // Verifica se a cor de fundo é branca
        if (bgColor === "rgb(255, 255, 255)" || bgColor === "#ffffff") {
          isDark = true; // Se o fundo for branco, o Header deve ser escuro
        } else {
          isDark = false; // Caso contrário, o Header deve ser claro
        }
      }
    });

    setIsHeaderDark(isDark);
  };

  // Efeito para detectar o scroll e mudar a cor do Header
  useEffect(() => {
    window.addEventListener("scroll", checkBackgroundColor);
    checkBackgroundColor(); // Verifica a cor inicial ao carregar a página
    return () => {
      window.removeEventListener("scroll", checkBackgroundColor);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`w-full flex justify-between items-center lg:px-16 px-6 py-3 sticky top-0 z-50 transition-colors duration-300 ${
        isHeaderDark ? "bg-black" : "bg-white"
      }`}
      style={{ height: "80px" }} // Altura fixa do Header
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src={logoHMSat11}
          alt="Logo"
          className="w-24 h-auto" // Tamanho da logo mantido
        />
      </div>

      {/* Menu para desktop */}
      <ul className="hidden lg:flex gap-8 items-center justify-center flex-grow">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={item.path}
              smooth={true}
              duration={500}
              className={`uppercase font-semibold text-sm cursor-pointer px-4 py-2 transition-colors duration-300 ${
                isHeaderDark ? "text-white" : "text-black"
              }`}
            >
              {item.link}
              {/* Efeito de hover: linha crescendo para os dois lados */}
              <span
                className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full ${
                  isHeaderDark ? "bg-white" : "bg-yellow-500"
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Botão de menu para mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className={`focus:outline-none transition-colors duration-300 ${
            isHeaderDark ? "text-white" : "text-black"
          }`}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className={`lg:hidden fixed top-0 right-0 w-full shadow-md z-40 transition-colors duration-300 ${
              isHeaderDark ? "bg-black" : "bg-white"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className={`focus:outline-none transition-colors duration-300 ${
                  isHeaderDark ? "text-white" : "text-black"
                }`}
              >
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-4 pb-4">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={item.path}
                    smooth={true}
                    duration={500}
                    className={`uppercase font-semibold text-sm cursor-pointer px-4 py-2 transition-colors duration-300 ${
                      isHeaderDark ? "text-white" : "text-black"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.link}
                    {/* Efeito de hover: linha crescendo para os dois lados */}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isHeaderDark ? "bg-white" : "bg-yellow-500"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;