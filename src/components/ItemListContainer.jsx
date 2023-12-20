import React from 'react'
// import ProductCard from './ProductCard'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './ItemListContainer.css'
import { Link } from 'react-router-dom';

const descriptionLength = 60

const ItemListContainer = ({ greeting, productsData }) => {
  return (
    <div>
      <div className='contenedorProductos d-flex flex-wrap'>
        {productsData.map((product) => {
          return (
            <Card key={product.id} className='col-lg-3 m-2'>
              <Link to={`/item/${product.id}`}>
                <Card.Img variant="top" src={product.thumbnail} className='imagen'/>
              </Link>
              <Card.Body className='tarjeta'>
                <Link to={`/item/${product.id}`} className='link-dark link-underline link-underline-opacity-0'>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{
                    (product.description.length < descriptionLength)? product.description : product.description.slice(0, descriptionLength) + "..."
                  }</Card.Text>
                  <Card.Subtitle>$ {product.price}  </Card.Subtitle>
                </Link>
                <Button className='mt-3' variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer