import { Injectable, NotFoundException } from '@nestjs/common';
import { CursoRepository } from '../../cursos/application/port/curso.repository';
import { EstudanteRepository } from '../../estudantes/application/port/estudantes.repository';
import { Gestao } from '../domain/gestao';
import { Estudante } from '../../estudantes/domain/estudante';
import { Curso } from '../../cursos/domain/curso';


@Injectable()
export class GestaoService extends Gestao{
  constructor(private readonly estudanteRepository: EstudanteRepository, private readonly cursoRepository: CursoRepository){
    super();
  }

  buscarEstudantePorEmail(email:string): Promise <Estudante>{
    const estudante = this.estudanteRepository.buscarPorEmail(email)

    if(!estudante){
      throw new NotFoundException("Estudante não cadastrado")
    }
    return estudante
  }

  buscarCursoPorTitulo(titulo:string): Promise<Curso>{
    const curso = this.cursoRepository.buscarPorTitulo(titulo)

    if(!curso){
      throw new NotFoundException('Curso não encontrado')
    }

    return curso
  }

  async matricula(emailEstudante: string, tituloCurso: string) {
    const curso = await this.cursoRepository.buscarPorTitulo(tituloCurso);
    const estudante = await this.estudanteRepository.buscarPorEmail(emailEstudante);

    curso.estudantes.push(estudante);
    estudante.cursos.push(curso.titulo);

    await this.cursoRepository.salvarCurso(curso);
    await this.estudanteRepository.salvar(estudante);
  }

}

