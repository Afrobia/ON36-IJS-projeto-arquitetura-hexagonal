import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCursosCommand } from './commands/create-cursos-command';
import { Curso } from '../domain/curso';
import { CursosFactory } from '../domain/factory/curso-factory';
import { CursoRepository } from './port/curso.repository';

@Injectable()
export class CursosService {
  constructor(
    private readonly cursoFactory: CursosFactory,
    private readonly cursoRepository: CursoRepository,
  ) {}

  adicionar(createCurso: CreateCursosCommand): Promise<Curso> {
    this.validarPorTitulo(createCurso);

    const curso = this.cursoFactory.criar(
      createCurso.titulo,
      createCurso.descricao,
    );

    return this.cursoRepository.salvarCurso(curso);
  }

  listarCursos(): Promise<Curso[]> {
    return this.cursoRepository.listarCurso();
  }

  validarPorTitulo(createCurso: CreateCursosCommand) {
    const cursoExistente = this.cursoRepository.buscarPorTitulo(
      createCurso.titulo);

    if (cursoExistente) {
      throw new ConflictException('Curso já cadastrado com esse título');
    }
  }
}
