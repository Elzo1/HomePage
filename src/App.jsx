import React from "react";

// Importações corrigidas dos componentes
import Header from "./sessoes/Header.jsx";
import Hero from "./sessoes/Hero.jsx";
import Portifolio from "./sessoes/Portifolio.jsx";
import Contatos from "./sessoes/Contatos.jsx";
import Foot from "./sessoes/Foot.jsx";
import AbountSobre from "./sessoes/AbountSobre.jsx";
import Services from "./sessoes/Services.jsx";

// Componente principal da aplicação
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AbountSobre/>
      <Services/>
      <Portifolio />
      <Contatos />
      <Foot />
    </>
  );
};

export default App;
