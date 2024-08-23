import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './estudantes/core/core.module';
import { ApplicationBootstrapOptions } from './estudantes/common/application-bootstrap-options.interface';
import { EstudantesModule } from './estudantes/application/estudantes.module';
import { EstudanteInfraestruturaModule } from './estudantes/infraestrutura/estudante-infraestrutura';
import { CursosModule } from './cursos/application/cursos.module';

@Module({
  imports: [CoreModule, CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { static register(options: ApplicationBootstrapOptions) {
  return {
    module: AppModule,
    imports: [
      CoreModule.forRoot(options), // Aqui entram as opções de configuração do banco de dados
      EstudantesModule.comInfraestrutura(
        EstudanteInfraestruturaModule.use(options.driver),
      ),
    ],
  };
}}
