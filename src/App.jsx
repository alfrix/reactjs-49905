// Components
import NavbarComponent from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { useEffect, useState } from 'react'
import { getProducts } from './services'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {

  const [productsData, setProductsData] = useState([]);
  
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductsData(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='contenedor-principal'>
      <NavbarComponent />
      <ItemListContainer greeting="Bienvenido" productsData={productsData}/>
    </div>
  )
}

export default App
