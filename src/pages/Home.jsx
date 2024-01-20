import { ItemListContainer } from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

export const Home = () => {
  const { productsData } = useGetProducts();
  return <ItemListContainer productsData={productsData} />;
};
