import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from '../presenter/http/cursos.controller';


@Module({
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
