import React, { useState, useContext } from "react";
import { Datos } from "../Rutas";
import '../../estilos/UltimasOfertas.css'
import { Button, Modal } from 'react-bootstrap'
import Producto from './Producto';
import Item from './Item';
import VistaPrevia from './VistaPrevia';
import TarjetaConfortComponente from "../TarjetaConfortComponente";
import Carrusel from "../Carrusel";

const Carrito = () => {
  const { productos, carrito, show, TYPES, dispatch } = useContext(Datos);

  const mostrarProducto = (id) => {dispatch({type: TYPES.SHOW_PRODUCT, payload: id})}
  const agregarAlCarrito = (id) => {dispatch({type: TYPES.ADD_TO_CART, payload: id})}

  const nuevoCarrito = carrito.map(item => item.cantidad)
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 id="productos--ancla" className="d-flex justify-content-center m-2 fs-1">Nuestros Productos</h1>
      <Carrusel />
      {/* Mapear productos */}
      <ul className='tarjetas'>
        {productos.map(producto => <Producto data={producto} agregarAlCarrito={agregarAlCarrito} mostrarProducto={mostrarProducto} />)}
      </ul>
      <TarjetaConfortComponente />
    </div>
  )
}

export default Carrito