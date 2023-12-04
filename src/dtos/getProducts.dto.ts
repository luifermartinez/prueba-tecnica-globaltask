import { Transform } from "class-transformer";
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { tempProduct } from "../utils/data/product";

@ValidatorConstraint()
export class StringArrayIfOneOfProductKeys
  implements ValidatorConstraintInterface
{
  public async validate(value: string[]) {
    const validFields = Object.keys(tempProduct);
    const invalidFields = value.filter((field) => !validFields.includes(field));
    return invalidFields.length === 0;
  }
}

export class GetProductsDto {
  @Transform(({ value }) => parseInt(value))
  @IsNumber({}, { message: "El número de página debe ser un número válido" })
  @IsPositive({
    message: "El número de página debe ser un número entero positivo mayor a 0",
  })
  @IsOptional()
  page?: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber(
    {},
    {
      message: "El número de elementos por página debe ser un número válido",
    }
  )
  @IsPositive({
    message:
      "El número de elementos por página debe ser un número entero positivo mayor a 0",
  })
  @IsOptional()
  limit?: number;

  @Transform(({ value }) => value.split(","))
  @IsString({
    each: true,
    message: "Los campos deben ser cadenas de texto",
  })
  @IsArray({
    message: "Los campos deben ser un arreglo",
  })
  @IsOptional()
  @Validate(StringArrayIfOneOfProductKeys, {
    message: `Los campos deben ser uno o varios de los siguientes: ${Object.keys(
      tempProduct
    ).join(", ")}`,
  })
  fields?: string[];
}
