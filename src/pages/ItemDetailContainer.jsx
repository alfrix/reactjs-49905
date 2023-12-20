import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const { productData } = useGetProductById(id);

  return (
    <Card key={productData.id}>
      <div className='d-flex'>
        <Card.Img variant="top" src={productData.thumbnail} /> 
        <Card.Body>
          <Card.Title>{productData.title} $ {productData.price}</Card.Title>
          <Card.Text>{productData.description}</Card.Text>
          <Button variant="primary">Agregar al carrito</Button>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </div>
    </Card>
  );
};