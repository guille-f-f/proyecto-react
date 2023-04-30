import React, { useState, useContext } from "react";
import { Datos } from "../Rutas";
import '../../estilos/UltimasOfertas.css'
import { TYPES } from './actions';
import { Button, Modal } from 'react-bootstrap'
import Producto from './Producto';
import Item from './Item';
import VistaPrevia from './VistaPrevia';


const Carrito = () => {
  const { productos, carrito, show, dispatch } = useContext(Datos);

  const mostrarProducto = (id) => {dispatch({type: TYPES.SHOW_PRODUCT, payload: id})}
  const agregarAlCarrito = (id) => {dispatch({type: TYPES.ADD_TO_CART, payload: id})}

  return (
    <div>
      <h2>Productos</h2>
      {/* Mapear productos */}
      <ul className='tarjetas'>
        {productos.map(producto => <Producto data={producto} agregarAlCarrito={agregarAlCarrito} mostrarProducto={mostrarProducto} />)}
      </ul>
    </div>
  )
}

export default Carrito