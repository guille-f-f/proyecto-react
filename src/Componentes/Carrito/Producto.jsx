import React from 'react'
import '../../estilos/UltimasOfertas.css'
import Boton from '../Boton'
import MostrarProducto from './MostrarProducto'

const Producto = ({data, agregarAlCarrito ,mostrarProducto}) => {
  const { id, imagen1, marca, nombre, descripcion, precio, descuento, porcentajeDeDescuento } = data
  const precioConDescuento = precio - (precio * porcentajeDeDescuento / 100)
  
  return (
    <li key={id} className='tarjeta'>
      <div className='tarjeta__contenedor--imagen'>
        <MostrarProducto data={data} mostrarProducto={mostrarProducto} agregarAlCarrito={agregarAlCarrito} />
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