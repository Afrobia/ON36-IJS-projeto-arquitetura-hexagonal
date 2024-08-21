import { Estudante } from '../../../estudantes/domain/estudante';

export abstract class EstudanteRepositoy {
  abstract criar(estudante: Estudante): Promise<Estudante>;
  abstract listar(): Estudante[];
  abstract buscarPorEmail(email: string): Promise<Estudante>;
}
