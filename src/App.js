import React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About/>
      <Resources/>
    </>
  );
}

export default App;
