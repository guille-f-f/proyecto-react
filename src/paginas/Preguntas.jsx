import React from 'react'
import '../estilos/Preguntas.css';
import { PregComp } from './PregComp';


const Preguntas = () => {
  return (
    <div className='preguntas'>
    <h1 className='preguntas_titulo'>Preguntas Frecuentes</h1>
    <PregComp />
    </div>
  )
}


export default Preguntas;
