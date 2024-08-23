import { Curso } from 'src/cursos/domain/curso';

export abstract class CursoRepository {
  abstract salvarCurso(curso: Curso): Promise<Curso>;
  abstract listarCurso(): Promise<Curso[]>;
  abstract buscarPorTitulo(titulo: string): Promise<Curso>;
}
