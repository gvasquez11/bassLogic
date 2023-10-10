import React from "react";
import Home from './pages/Home'
import ScrollToTop from "./components/ScrollToTop";
import {Route, Routes} from 'react-router-dom'
import Muffling from "./pages/Muffling";
import Tuning from "./pages/Tuning";
import SheetMusic from "./pages/SheetMusic";
import Extra from "./pages/Extra";

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tuning" element={<Tuning/>}></Route>
        <Route path="muffling" element={<Muffling/>}></Route>
        <Route path="sheet-music" element={<SheetMusic/>}></Route>
        <Route path="extra" element={<Extra/>}></Route>
      </Routes>
    </>
  );
}

export default App;
