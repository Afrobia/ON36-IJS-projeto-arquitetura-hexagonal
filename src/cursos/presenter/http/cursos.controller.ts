import { Controller, Get, Post, Body } from '@nestjs/common';
import { CursosService } from '../../application/cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { CreateCursosCommand } from 'src/cursos/application/commands/create-cursos-command';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  adicionar(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.adicionar(
      new CreateCursosCommand(createCursoDto.titulo, createCursoDto.descricao),
    );
  }

  @Get()
  listarCursos() {
    return this.cursosService.listarCursos();
  }
}
