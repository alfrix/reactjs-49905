// Components
import NavbarComponent from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div class='contenedor-principal'>
      <NavbarComponent />
      <div class='landing bg-dark text-dark-emphasis'>
        <ItemListContainer greeting="Bienvenido" />
      </div>
    </div>
  )
}

export default App
