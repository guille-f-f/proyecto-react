import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
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
    <div className='Navbar position-relative'>
      <img className="nav-logo" src="https://1000marcas.net/wp-content/uploads/2019/11/Adidas-Logo-1967-768x432.jpg" alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/preguntas">Preguntas</NavLink>
        
        <FontAwesomeIcon className="icono" icon={faSearch} />
        <MostrarCarrito carrito={carrito} eliminarDeCarrito={eliminarDeCarrito} limpiarCarrito={limpiarCarrito} />
        <p className="position-absolute z-2 top-0 end-0 m-1 fw-bold ">
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