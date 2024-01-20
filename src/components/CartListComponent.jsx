import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import Table from "react-bootstrap/Table";

export const CartListComponent = () => {
  const { items } = useContext(CartContext);

  const getProductName = (id) => {
    let { productData } = useGetProductById(id);
    return productData.title;
  };

  const getProductPrice = (id) => {
    let { productData } = useGetProductById(id);
    return productData.price;
  };

  const getTotal = () => {
    let total = 0;
    for (let index = 0; index < items.length; ++index) {
      total += items[index].quantity * getProductPrice(items[index].id);
    }
    return total;
  };

  if (items.length === 0) {
    return <Card.Text className="p-5 mx-auto">{"Vacio :("}</Card.Text>;
  } else {
    return (
      <Table striped className="my-2">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{getProductName(item.id)}</td>
                <td>{item.quantity}</td>
                <td>$ {getProductPrice(item.id)}</td>
                <td>$ {getProductPrice(item.id) * item.quantity}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>
              <b>Total</b>
            </td>
            <td>$ {getTotal()}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
};
