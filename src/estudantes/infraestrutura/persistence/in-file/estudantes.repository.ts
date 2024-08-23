import { Injectable } from '@nestjs/common';
import { Estudante } from '../../../domain/estudante';
import { EstudanteRepository } from '../../../application/port/estudantes.repository';
import { EstudanteEntity } from '../estudantes.entity';

@Injectable()
export class InFileEstudanteRepository implements EstudanteRepository {
  private readonly estudantes = new Map<string, EstudanteEntity>();

  async salvar(estudante: Estudante): Promise<Estudante> {
    return
  }

  async listar(): Promise<Estudante[]> {
    return
  }

  async buscarPorEmail(email: string): Promise<Estudante> {
    return
  }
}
