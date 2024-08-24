import { DynamicModule, Module, Type } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from '../presenter/http/cursos.controller';
import { CursosFactory } from '../domain/factory/curso-factory';
import { CursoRepository } from './port/curso.repository';


@Module({
  controllers: [CursosController],
  providers: [CursosService, CursosFactory],
  exports:[CursoRepository]
})
export class CursosModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: CursosModule,
      imports: [infrastructureModule],
    };
  }
}
