import { Link } from "react-router-dom";
import "../estilos/Coleccion.css";

const Coleccion = () => {
  return (
    <div className="contenedor">
      <div className="contenedor__imagen">
        <img
          className="imagen"
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a3e5c68026ca49288f15afa201048d57_9366/Camiseta_Alternativa_Seleccion_Argentina_Femenina_23_Negro_HT4228_25_model.jpg"
          alt=""
        />
      </div>
      <div className="contenedor__texto">
        <h3 className="contenedor__subtitulo">Pasión Argentina</h3>
        <h1 className="contenedor__titulo">
          Nueva Colección de la Selección Femenina de Futbol
        </h1>
        <div className="contenedor__parrafo">
          <p className="contenedor__parrafo--texto">
            {" "}
            La nueva camiseta alternativa de Argentina para la Copa Mundial
            Femenina se inspira en las vistas de la Serranía de Hornocal.
          </p>
          <p className="contenedor__parrafo--texto">
            El equipo femenino de la AFA está listo para el torneo de fútbol más
            importante del mundo.
          </p>
        </div>
        <Link to="*">
          <button className="contenedor__boton">Comprar ahora!</button>
        </Link>
      </div>
    </div>
  );
};

export default Coleccion;
