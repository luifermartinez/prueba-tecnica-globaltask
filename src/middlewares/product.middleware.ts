import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status";
import { GetProductsDto } from "../dtos/getProducts.dto";
import { getOneProductDto } from "../dtos/getOneProduct.dto";

export const getProductsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dto = plainToInstance(GetProductsDto, req.query);

  const productDto = new GetProductsDto();
  productDto.page = dto.page;
  productDto.limit = dto.limit;
  productDto.fields = dto.fields;

  const errors = await validate(productDto);
  if (errors.length > 0) {
    const error = errors.map((error) => Object.values(error.constraints!));
    return res.status(HttpStatus.BAD_REQUEST).json({ error });
  }

  return next();
};

export const getOneProductMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dto = plainToInstance(getOneProductDto, req.params);

  const errors = await validate(dto);
  if (errors.length > 0) {
    const error = errors.map((error) => Object.values(error.constraints!));
    return res.status(HttpStatus.BAD_REQUEST).json({ error });
  }

  return next();
};
