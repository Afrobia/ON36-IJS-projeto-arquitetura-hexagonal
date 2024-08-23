import { Estudante } from 'src/estudantes/domain/estudante';
import { CursoEntity } from './persistence/cursos-entity';
import { Curso } from '../domain/curso';

export class CursoMapper {
  static paraDominio(cursoEntity: CursoEntity): Curso {
    const model = new Curso();
    model.id = cursoEntity.id;
    model.titulo = cursoEntity.titulo;
    model.descricao = cursoEntity.descricao;
    model.professores = cursoEntity.professores;
    model.estudantes = cursoEntity.estudantes;

    return model;
  }

  static paraPersistencia(curso: Curso): CursoEntity {
    const entity = new CursoEntity();
    entity.id = curso.id;
    entity.titulo = curso.titulo;
    entity.descricao = curso.descricao;
    entity.professores = curso.professores;
    entity.estudantes = curso.estudantes;

    return entity
  }
}
