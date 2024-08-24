import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudanteCoreModule } from './estudantes/core/core.module';
import { ApplicationBootstrapOptions } from './estudantes/common/application-bootstrap-options.interface';
import { EstudantesModule } from './estudantes/application/estudantes.module';
import { EstudanteInfraestruturaModule } from './estudantes/infraestrutura/estudante-infraestrutura';
import { CursosModule } from './cursos/application/cursos.module';
import { CursoCoreModule } from './cursos/core/core.module';
import { CursoInfraestruturaModule } from './cursos/infraestrutura/curso-infraestrutura';
import { GestaoModule } from './gestao/application/gestao.module';



@Module({
  imports: [CursoCoreModule, EstudanteCoreModule, CursosModule, GestaoModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        EstudanteCoreModule.forRoot(options),
        EstudantesModule.comInfraestrutura(
          EstudanteInfraestruturaModule.use(options.driver),
        ),
        CursoCoreModule.forRoot(options),
        CursosModule.comInfraestrutura(
          CursoInfraestruturaModule.use(options.driver),
        ),
      ],
    };
  }
}
