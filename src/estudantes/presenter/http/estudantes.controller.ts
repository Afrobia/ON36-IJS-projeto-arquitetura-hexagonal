import { Controller, Post, Body} from '@nestjs/common';
import { EstudantesService } from '../../application/estudantes.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { CreateEstudanteCommand } from '../../../estudantes/application/commands/create-estudante-command';

@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}

  @Post()
  cadastrar(@Body() createEstudanteDto: CreateEstudanteDto) {
    return this.estudantesService.cadastrar(new CreateEstudanteCommand(
      createEstudanteDto.nome,
      createEstudanteDto.endereco,
      createEstudanteDto.telefone,
      createEstudanteDto.email,
      createEstudanteDto.idade
    ));
  }

}
