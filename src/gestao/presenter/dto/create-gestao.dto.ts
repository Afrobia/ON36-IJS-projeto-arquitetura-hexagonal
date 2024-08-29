import { IsNotEmpty, IsString } from "class-validator"

export class CreateGestaoDto {

    @IsNotEmpty()
    @IsString()
    emailEstudante: string

    @IsNotEmpty()
    @IsString()
    tituloCurso: string
}
