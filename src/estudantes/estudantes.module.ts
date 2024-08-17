import { Module } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { EstudantesController } from './estudantes.controller';
import { EstudantesRepository } from './repository/estudantes.repository';

@Module({
  controllers: [EstudantesController],
  providers: [EstudantesService, EstudantesRepository],
})
export class EstudantesModule {}
