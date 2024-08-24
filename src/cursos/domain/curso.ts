import { Estudante } from "../../estudantes/domain/estudante";

export class Curso {
  id: string;
  titulo: string;
  descricao: string;
  professores: string[];
  estudantes: Estudante[] ;
}
