import React from "react";
import Header from "./components/Header/Header";
import HeroContainer from "./components/HeroSection/HeroContainer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Client";

function App() {
  return (
    <>
      <Header />
      <HeroContainer />
      <About />
      <Services />
      <Clients />
    </>
  );
}

export default App;
