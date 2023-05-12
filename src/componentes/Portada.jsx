import { Link } from "react-router-dom";
import "../estilos/Portada.css";

const Portada = () => {
  return (
    <div className="portada">
      <div className="portada__texto">
        <h1 className="portada__titulo">
          Goodbye <span className="portada__titulo--color"> GRAVITY! </span>
        </h1>
        <h3 className="portada__subtitulo">
          Creadas a partir de plásticos reciclados, ecológicas y con tecnología
          Boost, que aporta confort gracias al retorno de energía y una
          amortiguación extrema al corredor al acabar con la gravedad.
        </h3>
        <Link to="*" className="portada__btn">
          VER MÁS!
        </Link>
      </div>
    </div>
  );
};

export default Portada;
