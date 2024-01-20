import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { AddToCart } from "../components/AddToCart";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const { productData } = useGetProductById(id);
  console.log(productData)

  return (
    <Card key={productData.id} className="m-5">
      <div className="d-flex align-content-center justify-content-center">
        <Card.Img
          style={{ width: "70%" }}
          variant="top"
          src={productData.thumbnail}
        />
        <Card.Body className="m-5">
          <Card.Title>
            {productData.title}
            <Button className="" variant="outline-primary">
              $ {productData.price}
            </Button>{" "}
          </Card.Title>
          <Card.Text>{productData.description}</Card.Text>
          <AddToCart productId={productData.id} />
        </Card.Body>
      </div>
    </Card>
  );
};
