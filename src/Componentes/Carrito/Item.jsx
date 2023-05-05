import React from 'react'
import { Button } from 'react-bootstrap'

const Item = ({data, eliminarDeCarrito}) => {

  const { id, nombre, marca, descripcion, precio, cantidad } = data;
  
  return (
    <li key={id} className='d-flex justify-content-around align-items-baseline m-1'>
      <h4 className='tarjeta__titulo item'>{nombre} {marca}</h4>
      <h5 className='item'>$ {precio} x {cantidad}ud.</h5>
      <h5 className='item'>$ {precio * cantidad}</h5>
      <Button className='modal__button' onClick={() => eliminarDeCarrito(id, false)} variant='light'>Eliminar uno</Button>
      <Button className='modal__button' onClick={() => eliminarDeCarrito(id, true)} variant='light'>Eliminar todos</Button>
    </li>
  )
}

export default Item