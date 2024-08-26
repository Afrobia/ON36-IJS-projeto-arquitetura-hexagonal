import { Controller, Post, Body, Get} from '@nestjs/common';
import { EstudantesService } from '../../application/estudantes.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { CreateEstudanteCommand } from '../../../estudantes/application/commands/create-estudante-command';
import { Estudante } from 'src/estudantes/domain/estudante';

@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}

  @Post()
  async cadastrar(@Body() createEstudanteDto: CreateEstudanteDto): Promise<Estudante> {
    return await this.estudantesService.cadastrar(new CreateEstudanteCommand(
      createEstudanteDto.nome,
      createEstudanteDto.endereco,
      createEstudanteDto.telefone,
      createEstudanteDto.email,
      createEstudanteDto.anoNascimento
    ));
  }

  @Get()
  listar() {
    return this.estudantesService.listarEstudante();
  }

}
