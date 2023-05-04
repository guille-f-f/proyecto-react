import React from "react";
// import UltimasOfertas from "../componentes/UltimasOfertas";
import Carrusel from "../Componentes/Carrusel";
import Coleccion from "../Componentes/Coleccion";
import Portada from "../Componentes/Portada";
import TarjetasConfort from "../Componentes/TarjetasConfort";
import Descuento from "../Componentes/Descuento";

const Homepage = () => {
  return (
  <>
  <Portada />
  {/* <UltimasOfertas /> */}
  <TarjetasConfort />
  <Descuento />
  <Coleccion />
  <Carrusel />
  </>
)};

export default Homepage;
