import React from 'react';
import '../estilos/Contacto.css';
import BasicExample from './Contacto-form';

const Contacto = () => {
  return (
    <div className='contacto_responsive'>
        <div className='contacto_contenedor'>
            <h1 className='contacto_contenedor-titulo'>Comunicate con nosotros!</h1>
        </div>
       <div className='contacto_contenedor-dos'>
        <div className='formulario'>
        <h3>Suscríbete para recibir ofertas especiales!</h3>
        <BasicExample />
        </div>
        <div className='redes'>
          <div >
            <h4 className='direccion_titulo'>Contacto:</h4>
            <ul>
              <li><strong>Direccion:</strong> San Martín 291</li>
              <li><strong>Teléfono:</strong> 0800 555 111</li>
              <li><strong>Gmail:</strong> indumentaria@gmail.com</li>
            </ul>
          </div>
          <div className='redes_sociales'>
            <h4 className='direccion_titulo'>Seguinos!</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">Tiktok</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>

          </div>
        </div>
       </div>
    </div>
  )
}


export default Contacto