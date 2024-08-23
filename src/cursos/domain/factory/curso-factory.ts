import { Injectable } from '@nestjs/common';
import { Curso } from '../curso';
import { randomUUID } from 'crypto';

@Injectable()
export class CursosFactory {
  criar(titulo: string, descricao: string): Curso{
    const curso = new Curso();
    curso.id = randomUUID();
    curso.titulo = titulo;
    curso.descricao = descricao;
    curso.professores = []
    curso.estudantes = [];
    return curso;
  }
}
