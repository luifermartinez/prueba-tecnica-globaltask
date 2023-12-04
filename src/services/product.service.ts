import axios from "axios";
import AxiosAdapter from "../adapters/axios.adapter";
import { GetProductsDto } from "../dtos/getProducts.dto";
import { GetProductsResponse, Product } from "../interfaces/product.interface";
import { handleAxiosErrorsInFindProduct } from "../utils/errors/product";

export default class ProductService {
  constructor(private readonly httpService: AxiosAdapter) {}

  /**
   * Obtiene una lista de productos paginada y filtrada.
   *
   * @param {GetProductsDto} options - Opciones para la consulta de productos.
   * @param {number} options.page - Página actual.
   * @param {number} options.limit - Cantidad de productos por página.
   * @param {string[]} options.fields - Campos a seleccionar en los productos.
   * @returns {Promise<GetProductsResponse | Error>} - Promesa que resuelve en una respuesta de productos o un error.
   * @throws {Error} - Error en caso de fallo en la consulta.
   */
  getProducts = async ({
    page = 1,
    limit = 10,
    fields,
  }: GetProductsDto): Promise<GetProductsResponse> => {
    const skip = (page - 1) * limit;
    const select = fields?.join(",");
    try {
      const data = await this.httpService.get<GetProductsResponse>(
        `/products?skip=${skip}&limit=${limit}${
          select ? `&select=${select}` : ""
        }`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Obtiene un producto por su ID.
   * @param {number} id - El ID del producto.
   * @returns {Promise<Product>} - Una promesa que se resuelve con los datos del producto.
   * @throws {AxiosError | Error} - Error que se produce al obtener el producto.
   */
  getProduct = async (id: number): Promise<Product> => {
    try {
      const data = await this.httpService.get<Product>(`/products/${id}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw handleAxiosErrorsInFindProduct(error);
      }
      throw error;
    }
  };
}
