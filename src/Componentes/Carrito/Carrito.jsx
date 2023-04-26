import React, { useReducer } from 'react'
import '../../estilos/UltimasOfertas.css'
import { TYPES } from './actions';
import { carritoInitialState, carritoReducer } from './carritoReducer';
import { Button, Modal } from 'react-bootstrap'
import Producto from './Producto';
import Item from './Item';
import VistaPrevia from './VistaPrevia';

const Carrito = () => {

  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const { productos, carrito, show } = state;

  const mostrarProducto = (id) => {dispatch({type: TYPES.SHOW_PRODUCT, payload: id})}
  const agregarAlCarrito = (id) => {dispatch({type: TYPES.ADD_TO_CART, payload: id})}
  const eliminarDeCarrito = (id, removerTodo) => {
    return removerTodo
    ? dispatch({type: TYPES.REMOVE_ALL_ITEM, payload: id})
    : dispatch({type: TYPES.REMOVE_ITEM, payload: id})
  }
  const limpiarCarrito = () => {dispatch({type: TYPES.CLEAR_CART})}

  return (
    <div>
      <h1>Carrito</h1>
      <h2>Productos</h2>
      {/* Mapear productos */}
      <ul className='tarjetas'>
        {productos.map(producto => <Producto key={producto.id} data={producto} agregarAlCarrito={agregarAlCarrito} mostrarProducto={mostrarProducto} />)}
      </ul>
      
      <h2>Carrito</h2>
      {/* Mapear carrito */}
      <ul>
        {carrito.map(item => <Item key={item.id} data={item} eliminarDeCarrito={eliminarDeCarrito} />)}
      </ul>
      
      <Button onClick={() => limpiarCarrito()} variant="warning">Limpiar carrito</Button>

      <h2>Vista Previa</h2>
      <ul>
        <VistaPrevia key={show.id} data={show} mostrarProducto={mostrarProducto} />
      </ul>
    </div>
  )
}

export default Carrito