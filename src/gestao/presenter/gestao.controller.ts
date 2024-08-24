import { Controller,Post, Body} from '@nestjs/common';
import { CreateGestaoDto } from './dto/create-gestao.dto';
import { GestaoService } from '../application/gestao.service';


@Controller('gestao')
export class GestaoController {
  constructor(private readonly gestaoService: GestaoService) {}

  @Post()
  create(@Body() createGestaoDto: CreateGestaoDto) {
    return this.gestaoService.matricula(createGestaoDto.emailEstudante,createGestaoDto.tituloCurso);
  }
}
