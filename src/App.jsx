import './estilos/App.css'
import { createContext } from 'react'
import BaseDeDatos from './datos/productos.json'
import Rutas from './componentes/Rutas'

export const Datos = createContext(); 

function App() {
  return (
    <div className="App">
      <Datos.Provider value={BaseDeDatos}>
        <Rutas />
      </Datos.Provider>
    </div>
  )
}

export default App
