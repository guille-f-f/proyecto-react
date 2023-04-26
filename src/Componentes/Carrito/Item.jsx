import React from 'react'
import { Button } from 'react-bootstrap'

const Item = (props) => {

  const { id, nombre, marca, descripcion, precio, cantidad } = props.data
  const eliminarDeCarrito = props.eliminarDeCarrito
  
  return (
    <li key={id} className='d-flex justify-content-around align-items-baseline m-1'>
      <h4 className='tarjeta__titulo'>{nombre} {marca}</h4>
      <h5>$ {precio} x {cantidad}ud.</h5>
      <h5>$ {precio * cantidad}</h5>
      <Button onClick={() => eliminarDeCarrito(id, false)} variant='danger'>Eliminar uno</Button>
      <Button onClick={() => eliminarDeCarrito(id, true)} variant='danger'>Eliminar todos</Button>
    </li>
  )
}

export default Item