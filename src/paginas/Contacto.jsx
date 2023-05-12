import { Link } from "react-router-dom";
import "../estilos/Contacto.css";
import BasicExample from "../componentes/Contacto-form";

const Contacto = () => {
  return (
    <div className="contacto__responsive">
      <div className="contacto__contenedor">
        <h1 className="contacto__contenedor--titulo">Comunicate con nosotros!</h1>
      </div>
      <div className="contacto__contenedor--dos">
        <div className="formulario">
          <h3>Suscríbete para recibir ofertas especiales!</h3>
          <BasicExample />
        </div>
        <div className="redes">
          <div>
            <h4 className="direccion__titulo">Contacto:</h4>
            <ul>
              <li>
                <strong>Direccion:</strong> San Martín 291
              </li>
              <li>
                <strong>Teléfono:</strong> 0800 555 111
              </li>
              <li>
                <strong>Gmail:</strong> indumentaria@gmail.com
              </li>
            </ul>
          </div>
          <div className="redes__sociales">
            <h4 className="direccion__titulo">Seguinos!</h4>
            <ul>
              <li>
                <Link to="*">Instagram</Link>
              </li>
              <li>
                <Link to="*">Youtube</Link>
              </li>
              <li>
                <Link to="*">Tiktok</Link>
              </li>
              <li>
                <Link to="*">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
