import { Transform } from "class-transformer";
import { IsNumber, IsPositive } from "class-validator";

export class getOneProductDto {
  @Transform(({ value }) => parseInt(value))
  @IsNumber(
    {},
    {
      message: "El id debe ser un número válido",
    }
  )
  @IsPositive({ message: "El id debe ser un número entero positivo mayor a 0" })
  id!: number;
}
