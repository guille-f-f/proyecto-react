import React from 'react'
import '../estilos/TarjetaPreguntas.css'

const TarjetaPreguntas = ({titulo="titulo", texto="texto"}) => {
  return (
    <div className='pregunta'>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
  )
}

export default TarjetaPreguntas