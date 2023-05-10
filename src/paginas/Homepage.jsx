import React from "react";
import UltimasOfertas from "../componentes/UltimasOfertas";
import Carrusel from "../componentes/Carrusel";
import Coleccion from "../componentes/Coleccion";
import Portada from "../componentes/Portada";
import TarjetasConfort from "../componentes/TarjetasConfort";
import Descuento from "../componentes/Descuento";

const Homepage = () => {
  return (
    <>
      <Portada />
      <UltimasOfertas />
      <TarjetasConfort />
      <Descuento />
      <Coleccion />
      <Carrusel />
    </>
  );
};

export default Homepage;
