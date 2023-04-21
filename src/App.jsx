import './App.css'
import './Componentes/BarraNavegacion/Navbar'
import Navbar from './Componentes/BarraNavegacion/Navbar'
import Coleccion from './Componentes/NuevaColeccion/Coleccion'
import Carrusel from './Componentes/Carrusel/Carrusel'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Coleccion/>
      <Carrusel/>
      
    </div>
  )
}

export default App
