import { DynamicModule, Module, Type } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { EstudantesController } from '../presenter/http/estudantes.controller';
import { EstudanteFactory } from '../domain/factory/factory';

@Module({
  controllers: [EstudantesController],
  providers: [EstudantesService, EstudanteFactory],
})
export class EstudantesModule {
    static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: EstudantesModule,
      imports: [infrastructureModule],
    };
  }
}
