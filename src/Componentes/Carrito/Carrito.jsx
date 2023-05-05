import React, { useState, useContext } from "react";
import { Datos } from "../Rutas";
import '../../estilos/UltimasOfertas.css'
import { TYPES } from './actions';
import { Button, Modal } from 'react-bootstrap'
import Producto from './Producto';
import Item from './Item';
import VistaPrevia from './VistaPrevia';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Carrito = () => {
  const { productos, carrito, show, dispatch } = useContext(Datos);

  const mostrarProducto = (id) => {dispatch({type: TYPES.SHOW_PRODUCT, payload: id})}
  const agregarAlCarrito = (id) => {dispatch({type: TYPES.ADD_TO_CART, payload: id})}

  const nuevoCarrito = carrito.map(item => item.cantidad)

  return (
    <div>
      <h2 id="productos--ancla">Productos</h2>
      {/* Mapear productos */}
      <ul className='tarjetas'>
        {productos.map(producto => <Producto data={producto} agregarAlCarrito={agregarAlCarrito} mostrarProducto={mostrarProducto} />)}
      </ul>
      <div className="carrito">
        <FontAwesomeIcon icon={faCartShopping} className="carrito__logo"/>
        <h4 className="carrito__contador">
          {nuevoCarrito.reduce((a, b) => a + b, 0)}
        </h4>
      </div>
    </div>
  )
}

export default Carrito