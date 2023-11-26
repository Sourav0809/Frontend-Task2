import React from "react";
import Header from "./components/Header/Header";
import HeroContainer from "./components/HeroSection/HeroContainer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Client";
import ProjectsContainer from "./components/Projects/ProjectsContainer";

function App() {
  return (
    <>
      <Header />
      <HeroContainer />
      <About />
      <Services />
      <Clients />
      <ProjectsContainer />
    </>
  );
}

export default App;
