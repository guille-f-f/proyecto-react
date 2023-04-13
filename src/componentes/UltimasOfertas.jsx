import React, { useContext } from "react";
import { Productos } from "../App";
import '../estilos/UltimasOfertas.css';
import Boton from "./Boton";

const UltimasOfertas = () => {
  const productos = useContext(Productos);
  const productosBonificados = productos.filter((producto) => {
    if (producto.descuento) {
      return producto;
    }
  });
  const numeroAleatorio = Math.floor(
    Math.random() * (productosBonificados.length - 0) - 0
  );
  const numeroAleatorioFiltrado =
    productosBonificados.length - 4 > numeroAleatorio ? numeroAleatorio : 0;
  const productosRenderizados = productosBonificados.splice(
    numeroAleatorioFiltrado,
    4
  );

  return (
    <>
      <h3 className="tarjetas__titulo">SHOW <span className="tarjetas__titulo--color">SALE!!</span></h3>
      <div className="tarjetas">
        {productosRenderizados.map((producto) => {
          if (producto.descuento) {
            return (
              <div className="tarjeta" key={producto.key}>
                <div className="tarjeta__contenedor--imagen">
                  <img
                    className="tarjeta__imagen"
                    src={producto["imagen-1"]}
                    alt={`Imagen ${producto.id}`}
                  />
                  <Boton />
                </div>
                <div className="tarjeta__datos">
                  <h5>{producto.nombre + " " + producto.marca}</h5>
                  <p>{producto.descripcion}</p>
                  <h3 className="tarjeta__precio">$ {producto.precio}</h3>
                  <h3 className="tarjeta__descuento">
                    -%{producto["porcentaje-de-descuento"]}
                  </h3>
                  <h3 className="tarjeta__precio--final">
                    ${" "}
                    {producto.precio -
                      (producto.precio * producto["porcentaje-de-descuento"]) /
                        100}
                  </h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default UltimasOfertas;
