import TarjetaPreguntas from "../Componentes/TarjetaPreguntas";
import PregContenedor from "../Componentes/PregContenedor";
import datos from "../datos/Preguntas.json";

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
