import React from 'react'
import { Button } from 'react-bootstrap'

const Item = ({data, eliminarDeCarrito}) => {

  const { id, nombre, marca, descripcion, precio, cantidad } = data;
  
  return (
    <li key={id} className='d-flex justify-content-around align-items-baseline m-1'>
      <p className='item'>{nombre} {marca}</p>
      <p className='item'>$ {precio} x {cantidad}ud.</p>
      <p className='item'>$ {precio * cantidad}</p>
      <Button className='modal__button btn-sm' onClick={() => eliminarDeCarrito(id, false)} variant='light'>Eliminar uno</Button>
      <Button className='modal__button btn-sm' onClick={() => eliminarDeCarrito(id, true)} variant='light'>Eliminar todos</Button>
    </li>
  )
}

export default Item