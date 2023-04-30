import { useReducer, createContext } from "react";
import { carritoReducer, carritoInitialState } from "./Carrito/carritoReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "../paginas/Homepage";
import Productos from "../paginas/Productos";
import Carrito from "../componentes/Carrito/Carrito";
import Preguntas from "../paginas/Preguntas";
import Contacto from "../paginas/Contacto";
import Footer from "./Footer";

export const Datos = createContext();

const Rutas = () => {
  const [stateCart, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const { productos, carrito, show } = stateCart;
  const context = {
    productos: productos,
    carrito: carrito,
    show: show,
    dispatch: dispatch,
  };

  return (
    <div>
      <BrowserRouter>
        <Datos.Provider value={context}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/productos" element={<Productos />} /> */}
            <Route path="/productos" element={<Carrito />} />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        <Footer />
        </Datos.Provider>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
