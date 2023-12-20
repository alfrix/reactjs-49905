import axios from "axios";

export async function getProducts(limit = 8) {
    return await axios.get('https://dummyjson.com/products')
}

export async function getProductById(id = 1) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategories() {
    return await axios.get(`https://dummyjson.com/products/categories`)
}

export async function getProductByCategory(category) {
    return await axios.get(`https://dummyjson.com/products/category/${category}`)
}