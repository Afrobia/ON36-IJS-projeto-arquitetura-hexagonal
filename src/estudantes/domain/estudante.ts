export class Estudante {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  cursos: string[];

  constructor(
    id: string,
    nome: string,
    endereco: string,
    telefone: string,
    email: string,
    cursos: string[],
  ) {}
}
