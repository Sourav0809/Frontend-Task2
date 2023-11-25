import React from "react";
import Header from "./components/Header/Header";
import HeroContainer from "./components/HeroSection/HeroContainer";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <HeroContainer />
      <About />
      <Services />
    </>
  );
}

export default App;
