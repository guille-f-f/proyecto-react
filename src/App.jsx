import './Componentes/BarraNavegacion/Navbar'
import Navbar from './Componentes/BarraNavegacion/Navbar'
import Coleccion from './Componentes/NuevaColeccion/Coleccion'
import Carrusel from './Componentes/Carrusel/Carrusel'
import './estilos/App.css'
import { createContext } from 'react'
import BaseDeDatos from './datos/productos.json'
import Rutas from './componentes/Rutas'

export const Productos = createContext(); 

function App() {
  return (
    <div className="App">
     
      
      <Productos.Provider value={BaseDeDatos}>
        <Rutas />
      </Productos.Provider>
    </div>
  )
}

export default App
