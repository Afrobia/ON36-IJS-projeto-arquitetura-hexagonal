import { Estudante } from "../../../estudantes/domain/estudante";

export class CursoEntity {
    id: string;
    titulo: string;
    descricao: string;
    professores: string[];
    estudantes: Estudante[] ;
  }