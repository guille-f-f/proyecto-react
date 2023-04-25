import React from 'react'
import '../estilos/Portada.css';

const Portada = () => {
  return (
    <div className='portada'>
        <div className='portada_texto'>
            <h1 className='portada_titulo'>Goodbye <span className='portada_titulo-color'> GRAVITY! </span></h1>
            <h3 className='portada_subtitulo'>Creadas a partir de plásticos reciclados, ecológicas  y con tecnología Boost, que aporta confort gracias al retorno de energía y una amortiguación extrema al corredor al acabar con la gravedad.</h3>
            <button className='portada_btn'>VER MÁS!</button>
        </div>
    </div>
  )
}

export default Portada