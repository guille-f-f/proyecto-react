import "../estilos/Preguntas.css";

const PregContenedor = (props) => {
  return (
    <section>
      <h1 className="preguntas__titulo">Preguntas Frecuentes</h1>
      <div>{props.children}</div>
    </section>
  );
};

export default PregContenedor;
