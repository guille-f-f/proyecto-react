import { useReducer, useEffect, createContext } from "react";
import { carritoReducer, carritoInitialState } from "./Carrito/carritoReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Homepage from "../paginas/Homepage";
import Productos from "../paginas/Productos";
import Preguntas from "../paginas/Preguntas";
import Contacto from "../paginas/Contacto";
import Error from "../paginas/Error";
import Footer from "./Footer";
import { TYPES } from "./Carrito/actions";

export const Datos = createContext();

const Rutas = () => {

  const actualizarState = async () => {
    const productosURL = "http://localhost:3000/productos";
    const resProductos = await axios.get(productosURL);
    const nuevoProducto = await resProductos.data;
    dispatch({type: TYPES.READ_STATE, payload: nuevoProducto})
  }
  useEffect(() => {
    actualizarState();
  }, [])
  
  
  const [stateCart, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const { productos, carrito, show } = stateCart;
  const context = {
    productos: productos,
    carrito: carrito,
    show: show,
    TYPES: TYPES,
    dispatch: dispatch
  };

  return (
    <div>
      <BrowserRouter>
        <Datos.Provider value={context}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Error />} /> {/* ruta not found */} 
          </Routes>
          <Footer />
        </Datos.Provider>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
