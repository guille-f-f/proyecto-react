import './App.css'
import { createContext, useContext } from 'react'
import BaseDeDatos from './datos/productos.json'
import UltimasOfertas from './componentes/UltimasOfertas'

export const Productos = createContext(); 

function App() {
  return (
    <div className="App">
      <Productos.Provider value={BaseDeDatos}>
        <UltimasOfertas />
      </Productos.Provider>
    </div>
  )
}

export default App
