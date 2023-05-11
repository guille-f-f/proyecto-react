import React from "react";
import "../estilos/Preguntas.css";

const PregContenedor = (props) => {
  return (
    <section>
      <h1 className="preguntas_titulo">Preguntas Frecuentes</h1>
      <div>{props.children}</div>
    </section>
  );
};

export default PregContenedor;
