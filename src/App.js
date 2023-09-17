import React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Home from './pages/Home'
import ScrollToTop from "./components/ScrollToTop";
import {Route, Routes} from 'react-router-dom'
import Muffling from "./pages/Muffling";
import Tunning from "./pages/Tunning";
import SheetMusic from "./pages/SheetMusic";
import Extra from "./pages/Extra";

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tunning" element={<Tunning/>}></Route>
        <Route path="muffling" element={<Muffling/>}></Route>
        <Route path="sheet-music" element={<SheetMusic/>}></Route>
        <Route path="extra" element={<Extra/>}></Route>
      </Routes>
    </>
  );
}

export default App;
