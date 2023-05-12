import "../estilos/TarjetasConfort.css";
import TarjetaConfortComponente from "./TarjetaConfortComponente";

const TarjetasConfort = () => {
  return (
    <div className="contenedor_principal">
      <h2>
        Por qué deberías{" "}
        <span className="tarjetas__titulo--color">elegir ADIDAS?</span>{" "}
      </h2>
      <TarjetaConfortComponente />
    </div>
  );
};

export default TarjetasConfort;
