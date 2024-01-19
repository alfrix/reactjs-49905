import { Cart } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { total } = useContext(CartContext);

  return (
    <div>
      <Button variant="primary">
        <Cart className="icono" /> {total}
      </Button>
    </div>
  );
};
