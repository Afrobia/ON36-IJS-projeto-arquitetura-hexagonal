import { Module } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { EstudantesController } from '../presenter/http/estudantes.controller';


@Module({
  controllers: [EstudantesController],
  providers: [EstudantesService],
})
export class EstudantesModule {}
