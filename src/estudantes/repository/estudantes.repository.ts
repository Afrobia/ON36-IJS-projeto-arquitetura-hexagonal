import { Injectable, NotFoundException } from '@nestjs/common';
import { Estudante } from '../entities/estudante.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class EstudantesRepository {
  private readonly estudantes: Estudante[] = [];

  salvarEstudantes(estudante: Estudante): Estudante {
    estudante.id = randomUUID();
    this.estudantes.push(estudante);
    console.log(`Salvando aluno ${estudante.nome}`);
    return estudante;
  }

  findByEmail(email: string): Estudante | null {
    return this.estudantes.find((estudante) => estudante.email == email);
  }
}
