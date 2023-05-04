import React from 'react'
import '../estilos/TarjetaPreguntas.css'

const TarjetaPreguntas = (props) => {
  return (
    <div className='pregunta'>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
    </div>
  )
}

export default TarjetaPreguntas