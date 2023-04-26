import React from 'react'
import '../../estilos/UltimasOfertas.css'
import Boton from '../Boton'

const Producto = (props) => {
  const { id, imagen1, marca, nombre, descripcion, precio, descuento, porcentajeDeDescuento } = props.data
  const mostrarProducto = props.mostrarProducto
  const agregarAlCarrito = props.agregarAlCarrito

  const precioConDescuento = precio - (precio * porcentajeDeDescuento / 100)
  
  return (
    <li key={id} className='tarjeta'>
      <div className='tarjeta__contenedor--imagen'>
        <img src={imagen1} alt="Imagen" className='tarjeta__imagen' onClick={() => mostrarProducto(id)} />
        <Boton valor="AGREGAR" accion={() => agregarAlCarrito(id)} />
      </div>
      <div className='tarjeta__datos'>
        <h4 className='tarjeta__titulo'>{nombre} {marca}</h4>
        <p className='tarjeta__descripcion'>{descripcion}</p>
        <h5 className={descuento ? 'tarjeta__precio--anulado' : 'tarjeta__precio'}>$ {precio}</h5>
          {
            descuento ?
            <>
              <h5 className='tarjeta__descuento'>-% {porcentajeDeDescuento}</h5>
              <h5 className='tarjeta__precio--final'>$ {precioConDescuento}</h5>
            </>
            : false
          }
      </div>
    </li>
  )
}

export default Producto