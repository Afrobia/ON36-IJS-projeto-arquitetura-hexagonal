import { IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString} from "class-validator";

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
  @IsPositive()
  @IsNumber()
  anoNascimento: number;
}
