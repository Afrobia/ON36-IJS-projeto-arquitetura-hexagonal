import { IsNotEmpty, IsString } from "class-validator";

export class CreateCursoDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;
  
  @IsNotEmpty()
  @IsString()
  descricao: string;
}
