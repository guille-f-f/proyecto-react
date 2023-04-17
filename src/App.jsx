import './App.css'
import { createContext, useContext } from 'react'
import BaseDeDatos from './datos/productos.json'
import UltimasOfertas from './componentes/UltimasOfertas'

export const Productos = createContext(); 
import './Componentes/BarraNavegacion/Navbar'
import Navbar from './Componentes/BarraNavegacion/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Productos.Provider value={BaseDeDatos}>
        <UltimasOfertas />
      </Productos.Provider>
    </div>
  )
}

export default App
