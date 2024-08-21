import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateEstudanteDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;
  
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsNumber()
  @Min(16)
  idade: number;
}
