import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "../paginas/Homepage";
import Productos from "../paginas/Productos";
import Carrito from "../componentes/Carrito/Carrito"
import Preguntas from "../paginas/Preguntas";
import Contacto from "../paginas/Contacto";
import Footer from "./Footer";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/productos" element={<Productos />} /> */}
          <Route path="/productos" element={<Carrito />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Rutas;