import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export const AddToCart = ({ productId }) => {
  const [countItem, setCountItem] = useState(1);
  const { items, setItems, setTotal } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    if (countItem <= 1) {
      return;
    }
    setCountItem(countItem - 1);
  };

  const handleAddProductToCart = () => {
    const newProduct = {
      id: productId,
      quantity: countItem,
    };

    if (items.length === 0) {
      setItems([newProduct]);
      console.log("Carrito vacio sumando producto");
      setTotal(countItem); // actualizar cuenta del carrito
    } else {
      let found = false;
      for (let index = 0; index < items.length; ++index) {
        if (items[index].id === productId) {
          console.log(
            `Hay un producto de este tipo en el carrito sumando ${countItem}`
          );
          items[index].quantity += countItem;
          found = true;
          break;
        }
      }
      let total = 0;
      for (let index = 0; index < items.length; ++index) {
        total += items[index].quantity;
      }
      if (!found) {
        console.log("Sumando nuevo producto");
        setItems([...items, newProduct]);
        setTotal(total + countItem); // actualizar cuenta del carrito
      } else {
        setTotal(total); // actualizar cuenta del carrito
      }
    }

    setCountItem(1); // reset al sumador
    console.log(items);
  };

  return (
    <div>
      <Button onClick={handleRemove}>-</Button>
      <span>{countItem}</span>
      <Button onClick={handleAdd}>+</Button>
      <Button onClick={handleAddProductToCart} variant="primary">
        Agregar al carrito
      </Button>
    </div>
  );
};
