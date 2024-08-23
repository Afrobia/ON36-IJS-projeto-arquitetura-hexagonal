import { Injectable } from '@nestjs/common';
import { Estudante } from '../../../domain/estudante';
import { EstudanteRepository } from '../../../application/port/estudantes.repository';
import { EstudanteEntity } from '../estudantes.entity';
import { EstudanteMapper } from '../estudantes.mappers';

@Injectable()
export class InMemoryEstudanteRepository implements EstudanteRepository {
  
  private readonly estudantes = new Map<string, EstudanteEntity>();

  async salvar(estudante: Estudante): Promise<Estudante> {
    const persistenceModel = EstudanteMapper.paraPersistencia(estudante);
    this.estudantes.set(persistenceModel.id, persistenceModel);
    const newEntity = this.estudantes.get(persistenceModel.id);
    return EstudanteMapper.paraDominio(newEntity);
  }

  async listar(): Promise<Estudante[]> {
    const entities = Array.from(this.estudantes.values());
    return entities.map((item) => EstudanteMapper.paraDominio(item));
  }

  async buscarPorEmail(email: string): Promise<Estudante> {
    const entities = Array.from(this.estudantes.values());
    const estudanteEncontrado = entities.find((item) => item.email === email);
    
    if (!estudanteEncontrado) {
      return null;
    }
    
    return EstudanteMapper.paraDominio(estudanteEncontrado);
  }
}