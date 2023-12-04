import { AxiosError } from "axios";
import { FindOneProductErrorResponse } from "../../interfaces/product.interface";

export const handleAxiosErrorsInFindProduct = (
  error: AxiosError<FindOneProductErrorResponse>
) => {
  const { status, response } = error;
  if (response?.data) return new ProductError(response.data.message);
  if (status === 404) return new NotFoundError("Product not found");
  if (status === 500) return new InternalServerError("Internal server error");
  return error;
};

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

class InternalServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InternalServerError";
  }
}

class ProductError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProductError";
  }
}
