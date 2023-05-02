import React, { useState } from "react";
import '../estilos/Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Navbar'>
      <img className="nav-logo" src="https://1000marcas.net/wp-content/uploads/2019/11/Adidas-Logo-1967-768x432.jpg" alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
        <a href="/preguntas">Preguntas</a>
        
        <FontAwesomeIcon className="icono" icon={faSearch} />
        <FontAwesomeIcon className="icono" icon={faShoppingCart} />
        
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
