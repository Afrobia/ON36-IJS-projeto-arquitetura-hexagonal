import { DynamicModule, Module, Type } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from '../presenter/http/cursos.controller';


@Module({
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: CursosModule,
      imports: [infrastructureModule],
    };
  }
}
