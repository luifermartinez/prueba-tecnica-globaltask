import { Router } from "express";
import ProductService from "../services/product.service";
import ProductController from "../controllers/product.controller";
import {
  getOneProductMiddleware,
  getProductsMiddleware,
} from "../middlewares/product.middleware";
import AxiosAdapter from "../adapters/axios.adapter";

const router = Router();

const axiosAdapter = new AxiosAdapter();

const productService = new ProductService(axiosAdapter);
const productController = new ProductController(productService);

router.use("/products", getProductsMiddleware);
router.get("/products", productController.getProducts);
router.use("/products/:id", getOneProductMiddleware);
router.get("/products/:id", productController.getProduct);

export { router };
