import { Injectable } from '@nestjs/common';
import { Estudante } from '../../../domain/estudante';
import { EstudanteRepository } from '../../../application/port/estudantes.repository';
import { EstudanteEntity } from '../estudantes.entity';

@Injectable()
export class InFileEstudanteRepository implements EstudanteRepository {
  private readonly estudantes = new Map<string, EstudanteEntity>();

  async salvar(estudante: Estudante): Promise<Estudante> {
    throw new Error('Method not implemented.');
  }

  async listar(): Promise<Estudante[]> {
    throw new Error('Method not implemented.');
  }

  async buscarPorEmail(email: string): Promise<Estudante> {
    throw new Error('Method not implemented.');
  }
}
