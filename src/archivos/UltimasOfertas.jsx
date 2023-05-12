import React, { useContext } from "react";
import { Datos } from "./Rutas";
import "../estilos/TarjetaProductos.css";
import { Link } from "react-router-dom";
import Boton from "./Boton";

const UltimasOfertas = () => {
  const { productos, carrito, show, dispatch } = useContext(Datos);
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
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="section--showsale">
      <h3 className="tarjetas__titulo">
        SHOW <span className="tarjetas__titulo--color">SALE!!</span>
      </h3>
      <div className="tarjetas">
        {productosRenderizados.map((producto) => {
          if (producto.descuento) {
            return (
              <div className="tarjeta " key={producto.key}>
                <div className="tarjeta__contenedor--imagen">
                  <img
                    className="tarjeta__imagen"
                    src={producto.imagen1}
                    alt={`Imagen ${producto.id}`}
                  />
                  <Link to="/productos" onClick={handleScrollToTop}>
                    <Boton valor="SHOWROOM" />
                  </Link>
                </div>
                <div className="tarjeta__datos">
                  <h4 className="tarjeta__titulo">
                    {producto.nombre + " " + producto.marca}
                  </h4>
                  <p>{producto.descripcion}</p>
                  <h3 className="tarjeta__precio--anulado">
                    $ {producto.precio}
                  </h3>
                  <h3 className="tarjeta__descuento">
                    -%{producto.porcentajeDeDescuento}
                  </h3>
                  <h3 className="tarjeta__precio--final">
                    ${" "}
                    {producto.precio -
                      (producto.precio * producto.porcentajeDeDescuento) / 100}
                  </h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default UltimasOfertas;
