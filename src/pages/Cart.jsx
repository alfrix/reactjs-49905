import Card from "react-bootstrap/Card";
import { CartListComponent } from "../components/CartListComponent";
import { Cart as CartIcon } from "react-bootstrap-icons";
import { CheckoutForm } from "../components/CheckoutForm";

export const Cart = () => {
  return (
    <div className="d-flex align-content-center justify-content-center m-5">
      <Card style={{ width: "75vw" }}>
        <Card.Header style={{ width: "100%" }} className="p-4 text-center">
          Carrito <CartIcon style={{ paddingBottom: "0.2rem" }} />
        </Card.Header>
        <CartListComponent />
        <CheckoutForm />
      </Card>
    </div>
  );
};
