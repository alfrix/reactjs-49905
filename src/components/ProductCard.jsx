import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(products) {
  return (
    <Card key={products.id} style={{ width: "18rem" }}>
    <Card.Img variant="top" src={products.thumbnail} />
    <Card.Body>
      <Card.Title>{products.title}</Card.Title>
      <Card.Text>{products.description}</Card.Text>
      <div></div>
      <Button variant="primary">Agregar al carrito $ {products.price}</Button>
    </Card.Body>
   </Card>
  );
}

export default ProductCard;