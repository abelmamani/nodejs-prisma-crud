import { Router } from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const produtRoute = Router();;
produtRoute.get('/', getProducts);  
produtRoute.get('/:id', getProductById);  
produtRoute.post('/', createProduct);  
produtRoute.put('/:id', updateProduct);  
produtRoute.delete('/:id', deleteProduct);  

export default produtRoute;