import { useContext } from "react";
import { Datos } from "../../rutas/Rutas";
import "../../estilos/TarjetaProductos.css";
import Producto from "./Producto";
import TarjetasConfort from "../TarjetasConfort";
import Carrusel from "../Carrusel";

const Carrito = () => {
  const { productos, TYPES, dispatch } = useContext(Datos);

  const mostrarProducto = (id) => {
    dispatch({ type: TYPES.SHOW_PRODUCT, payload: id });
  };
  const agregarAlCarrito = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1
        id="productos--ancla"
        className="d-flex justify-content-center m-2 fs-1"
      >
        Nuestros Productos
      </h1>
      <div className="w-100">
        <Carrusel />
      </div>
      {/* Mapear productos */}
      <ul className="tarjetas">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            data={producto}
            agregarAlCarrito={agregarAlCarrito}
            mostrarProducto={mostrarProducto}
          />
        ))}
      </ul>
      <TarjetasConfort />
    </div>
  );
};

export default Carrito;
