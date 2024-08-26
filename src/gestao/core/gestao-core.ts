import { Module } from "@nestjs/common";
import { ApplicationBootstrapOptions } from "../common/application-bootstrap-options.interface";

@Module({})
export class GestaoCoreModule {

  static forRoot(options: ApplicationBootstrapOptions) {
    const imports = [];
    // options.driver === 'typeorm // aqui podem entrar multiplas configurações de banco de dados

    return {
      module: GestaoCoreModule,
      imports,
    };
  }
}