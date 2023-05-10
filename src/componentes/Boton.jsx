import React from "react";
import "../estilos/Boton.css";

const Boton = (props) => {
  const { valor, accion } = props;
  return (
    <button className="boton" onClick={accion}>
      {valor}
    </button>
  );
};

export default Boton;
