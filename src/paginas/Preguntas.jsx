import TarjetaPreguntas from "../componentes/TarjetaPreguntas";
import PregContenedor from "../componentes/PregContenedor";
import datos from "../datos/preguntas.json";

const Preguntas = () => {
  return (
    <PregContenedor>
      {datos.map((pregunta) => (
        <TarjetaPreguntas
          key={pregunta.id}
          titulo={pregunta.titulo}
          texto={pregunta.texto}
        />
      ))}
    </PregContenedor>
  );
};

export default Preguntas;
