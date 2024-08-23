import { Injectable } from '@nestjs/common';
import { CreateCursosCommand } from './commands/create-cursos-command';
import { Curso } from '../domain/curso';
import { CursosFactory } from '../domain/factory/curso-factory';


@Injectable()
export class CursosService {
  constructor(private readonly cursoFactory: CursosFactory){}

  adicionar(createCurso: CreateCursosCommand): Curso {
    const curso = this.cursoFactory.criar(createCurso.titulo, createCurso.descricao )
    return curso;
  }

  listarCursos() {
    return `This action returns all cursos`;
  }

}
