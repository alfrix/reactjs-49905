import React from 'react'
// import ProductCard from './ProductCard'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './ItemListContainer.css'
const descriptionLength = 60

const ItemListContainer = ({ greeting, productsData }) => {
  return (
    <div>
      {/* <h1 className='landing bg-dark text-dark-emphasis text-light'>
        {greeting}
      </h1> */}
      <div className='contenedorProductos d-flex flex-wrap'>
        {productsData.map((product) => {
          return (
            <Card key={product.id} className='col-lg-3 m-2'>
              <Card.Img variant="top" src={product.thumbnail} className='imagen'/>
              <Card.Body className='tarjeta'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{
                  (product.description.length < descriptionLength)? product.description : product.description.slice(0, descriptionLength) + "..."
                }</Card.Text>
                <Card.Title>$ {product.price}  </Card.Title>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer