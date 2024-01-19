import { useEffect, useState } from "react";
import { getProducts, getProductById } from "../services";
import { getCategories, getProductByCategory } from "../services";

export const useGetProducts = (limit) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProducts(limit)
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { productsData };
};

export const useGetCategories = () => {
  useEffect(() => {
    getCategories().then(response);
  });
};

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { productData };
};

export const useGetProductByCategory = (category) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductByCategory(category)
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return { productsData };
};

export const useCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  return { category };
};
