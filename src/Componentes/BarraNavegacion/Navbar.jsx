import React, { useState } from "react";
import '../BarraNavegacion/Nav.css'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Navbar'>
      <span className='nav-logo'>INDUMENTARIA</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
        <a href="/preguntas">Preguntas</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Navbar;
