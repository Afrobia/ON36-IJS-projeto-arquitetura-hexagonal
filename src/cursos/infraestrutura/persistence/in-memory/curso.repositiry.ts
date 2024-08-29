import { Injectable } from '@nestjs/common';
import { CursoRepository } from '../../../../cursos/application/port/curso.repository';
import { CursoEntity } from '../cursos-entity';
import { Curso } from '../../../../cursos/domain/curso';
import { CursoMapper } from '../../cursos.mappers';

@Injectable()
export class InMemoryCursoRepository implements CursoRepository {
  private readonly cursos = new Map<string, CursoEntity>();
  
  async salvarCurso(curso: Curso): Promise<Curso> {
    const persistenceModel = CursoMapper.paraPersistencia(curso);
    this.cursos.set(persistenceModel.id, persistenceModel);
    const newEntity = this.cursos.get(persistenceModel.id);
    
    return CursoMapper.paraDominio(newEntity);
  }

  async listarCurso(): Promise<Curso[]> {
    const entities = Array.from(this.cursos.values());

    return entities.map((item) => CursoMapper.paraDominio(item));
  }

  async buscarPorTitulo(titulo: string): Promise<Curso> {
    const entities = Array.from(this.cursos.values());
    const cursoEncontrado = entities.find((item) => item.titulo === titulo);

    if (!cursoEncontrado) {
      return null;
    }

    return CursoMapper.paraDominio(cursoEncontrado);
  }
}
