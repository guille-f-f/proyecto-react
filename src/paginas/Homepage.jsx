import React from "react";
import UltimasOfertas from "../componentes/UltimasOfertas";
import Carrusel from "../Componentes/Carrusel/Carrusel";
import Coleccion from "../Componentes/NuevaColeccion/Coleccion";
import Portada from "../Componentes/Portada";

const Homepage = () => {
  return (
  <>
  <Portada />
  <UltimasOfertas />
  <Coleccion />
  <Carrusel />
  </>
)};

export default Homepage;
