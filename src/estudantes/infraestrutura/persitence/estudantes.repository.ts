import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Estudante } from '../../domain/estudante';
import { EstudanteRepositoy } from '../../../estudantes/application/port/estudantes.repository';

@Injectable()
export class EstudanteRepositoryAdapter implements EstudanteRepositoy{
  
  private readonly estudantes: Estudante[] = [];

  async criar(estudante: Estudante): Promise<Estudante> {
    estudante.id = randomUUID();
    this.estudantes.push(estudante);
    console.log(`Salvando aluno ${estudante.nome}`);
    return estudante;
  }

  listar(): Estudante[] {
    return this.estudantes
  }

  async buscarPorEmail(email: string): Promise<Estudante> {
    return this.estudantes.find((estudante) => estudante.email == email);
  }
}
