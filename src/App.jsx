import React from "react";
import Header from "./components/Header/Header";
import HeroContainer from "./components/HeroSection/HeroContainer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Client";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <HeroContainer />
      <About />
      <Services />
      <Toaster />
      <Clients />
      <ProjectsContainer />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
