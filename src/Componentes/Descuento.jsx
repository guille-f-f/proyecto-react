import React from 'react';
import '../estilos/Descuento.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons'

const Descuento = () => {
  return (
    <div className='descuento_contenedor'>
        <div className='descuento'>
            <h2 className='descuento_titulo'>COMENZÓ MEMBERS WEEK!!</h2>
            <button className='descuento_boton'>CONOCÉ MÁS  <FontAwesomeIcon icon={faLongArrowRight} /> </button>
            <button className='descuento_boton'>COMPRAR AHORA  <FontAwesomeIcon icon={faLongArrowRight} /> </button>
            <p className='descuento_texto'>Desbloqueá experiencias exclusivas, beneficios, lanzamientos y mucho más.</p>

        </div>
        
    </div>
  )
}

export default Descuento