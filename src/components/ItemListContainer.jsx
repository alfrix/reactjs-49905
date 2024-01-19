import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import { AddToCart } from "../components/AddToCart";
import { CardFooter } from "react-bootstrap";

const descriptionLength = 60;

export const ItemListContainer = ({ greeting, productsData }) => {
  return (
    <div>
      <div className="contenedorProductos d-flex flex-wrap">
        {productsData.map((product) => {
          return (
            <Card key={product.id} className="col-lg-3 m-2">
              <Link to={`/item/${product.id}`}>
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  className="imagen"
                />
              </Link>
              <Card.Body className="p-4">
                <Link
                  to={`/item/${product.id}`}
                  className="link-dark link-underline link-underline-opacity-0"
                >
                  <Card.Title>{product.title}</Card.Title>
                  <div className="text-center">
                    <Button className="" variant="outline-primary">
                      $ {product.price}
                    </Button>{" "}
                  </div>
                </Link>
                <div className="text-center">
                  <AddToCart className="mx-5" productId={product.id} />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
