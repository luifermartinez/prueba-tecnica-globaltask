import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { GetProductsDto } from "../dtos/getProducts.dto";
import ProductService from "../services/product.service";
import { getOneProductDto } from "../dtos/getOneProduct.dto";

export default class ProductController {
  constructor(private readonly productService: ProductService) {
    this.productService = productService;
  }

  getProducts = async (req: Request, res: Response) => {
    try {
      const getProductDto = plainToInstance(GetProductsDto, req.query);
      const products = await this.productService.getProducts(getProductDto);
      return res.json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  getProduct = async (req: Request, res: Response) => {
    try {
      const { id } = plainToInstance(getOneProductDto, req.params);
      const product = await this.productService.getProduct(id);
      return res.json(product);
    } catch (error) {
      const { message, name, stack } = error as Error;
      return res.status(500).send({
        message,
        name,
        stack,
      });
    }
  };
}
