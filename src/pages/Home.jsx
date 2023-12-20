import ItemListContainer from '../components/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

export const Home = () => {
    const  {productsData} = useGetProducts(8);
    return (
        <ItemListContainer productsData={productsData}/>
    )
}