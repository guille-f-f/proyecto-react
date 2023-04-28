import React from 'react'
import '../estilos/TarjetasConfort.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faUndo, faSnowboarding, faHeart } from '@fortawesome/free-solid-svg-icons'

const TarjetaConfortComponente = () => {
  return (
    <div>
         <div className='contenedor_tarjetas'>
            <div className='seccion'>
            <FontAwesomeIcon className="tarjeta_icono" icon={faMedal} />
            <h4 className='seccion_titulo'>Confort y diseño</h4>
            <p>Contamos con especialistas trabajando para que encuentres el confort en cada pisada. Nuestras zapatillas se amoldan a cada pie!</p>
            </div>
            <div className='seccion'>
            <FontAwesomeIcon  className="tarjeta_icono"  icon={faUndo} />
            <h4 className='seccion_titulo'>Colección Sustentable</h4>
            <p>Ampliamos nuestro catálogo de materiales para incluir elementos reciclados y naturales. Juntos en la lucha por salvar nuestro planeta!</p>
            </div>
            <div className='seccion'>
            <FontAwesomeIcon className="tarjeta_icono" icon={faSnowboarding} />
            <h4 className='seccion_titulo'>Todos los deportes</h4>
            <p>Podrás encontrar calzado para cada deporte para que cuentes con comodidad y excelencia en todos los pasos que des!</p>
            </div>
            <div className='seccion'>
            <FontAwesomeIcon className="tarjeta_icono" icon={faHeart} />
            <h4 className='seccion_titulo'>Historia</h4>
            <p>Desde 1949 creando  buenos productos, durables, cómodos y con un diseño atractivo!</p>
            </div>
        </div>
    </div>
  )
}

export default TarjetaConfortComponente