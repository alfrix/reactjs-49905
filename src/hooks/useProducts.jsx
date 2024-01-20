import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const useGetProducts = (collectionName = "products") => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName); //Podemos usarlo para cualquier colección

    getDocs(productsCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return { productsData };
};

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, "products", id);

    getDoc(docRef).then((doc) => {
      setProductData({ id: doc.id, ...doc.data() });
    });
  }, [id]);

  return { productData };
};

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "categories");

    getDocs(productsCollection).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categories[0].categories);
    });
  }, []);

  return { categories };
};

export const useGetProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  console.log(`Getting category ${category}`);

  useEffect(() => {
    const db = getFirestore();
    const docRef = collection(db, "products");
    const q = query(docRef, where("category", "==", category));

    getDocs(q).then((querySnapshot) => {
      const products = [];

      querySnapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(products);
      setProducts(products);
    });
  }, [category]);

  return { products };
};
