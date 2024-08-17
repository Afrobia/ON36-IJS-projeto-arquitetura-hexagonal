import { Controller, Post, Body} from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';

@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}

  @Post()
  cadastrar(@Body() createEstudanteDto: CreateEstudanteDto) {
    return this.estudantesService.cadastrar(createEstudanteDto);
  }

}
