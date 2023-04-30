import React, { useState, useContext } from "react";
import { Datos } from "./Rutas";
import '../estilos/Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MostrarCarrito from "./Carrito/MostrarCarrito";
import { TYPES } from "./Carrito/actions";

const Navbar = () => {
  const { produstos, carrito, show, dispatch} = useContext(Datos);
  const [isOpen, setIsOpen] = useState(false);

  const eliminarDeCarrito = (id, removerTodo) => {
    return removerTodo
    ? dispatch({type: TYPES.REMOVE_ALL_ITEM, payload: id})
    : dispatch({type: TYPES.REMOVE_ITEM, payload: id})
  }
  const limpiarCarrito = () => {dispatch({type: TYPES.CLEAR_CART})}
  const nuevoCarrito = carrito.map(item => item.cantidad)

  return (
    <div className='Navbar'>
      <span className='nav-logo'>INDUMENTARIA</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
        <a href="/preguntas">Preguntas</a>
        
        <FontAwesomeIcon className="icono" icon={faSearch} />
        <MostrarCarrito carrito={carrito} eliminarDeCarrito={eliminarDeCarrito} limpiarCarrito={limpiarCarrito} />
        <p className="position-fixed top-0 end-0 m-1 fw-bold">
          {nuevoCarrito.reduce((a, b) => a + b, 0)}
        </p>
        
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
