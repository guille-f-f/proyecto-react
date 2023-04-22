import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "../paginas/Homepage";
import Productos from "../paginas/Productos"

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;