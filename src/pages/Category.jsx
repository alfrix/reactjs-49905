import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";
import { useGetProductsByCategory } from "../hooks/useProducts";

export const Category = () => {
  const { category } = useParams();

  const { products } = useGetProductsByCategory(category);

  return <ItemListContainer productsData={products} />;
};
