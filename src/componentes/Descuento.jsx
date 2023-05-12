import { Link } from "react-router-dom";
import "../estilos/Descuento.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

const Descuento = () => {
  return (
    <div className="descuento__contenedor">
      <div className="descuento">
        <h2 className="descuento__titulo">COMENZÓ MEMBERS WEEK!!</h2>
        <Link to="*">
          <button className="descuento__boton">
            CONOCÉ MÁS <FontAwesomeIcon icon={faLongArrowRight} />{" "}
          </button>
        </Link>
        <Link to="*">
          <button className="descuento__boton">
            COMPRAR AHORA <FontAwesomeIcon icon={faLongArrowRight} />{" "}
          </button>
        </Link>
        <p className="descuento__texto">
          Desbloqueá experiencias exclusivas, beneficios, lanzamientos y mucho
          más.
        </p>
      </div>
    </div>
  );
};

export default Descuento;
