import { Module } from '@nestjs/common';
import { ApplicationBootstrapOptions } from '../common/application-bootstrap-options.interface';

@Module({})
export class EstudanteCoreModule {

  static forRoot(options: ApplicationBootstrapOptions) {
    const imports = [];
    // options.driver === 'typeorm // aqui podem entrar multiplas configurações de banco de dados

    return {
      module: EstudanteCoreModule,
      imports,
    };
  }
}

// Aqui é um boiler plate para você cnseguir inserir as configurações do banco na inicialização da aplicação.
// Agora não faz tanto sentido, mas quando você tiver que configurar o banco de dados, vai ser muito útil.