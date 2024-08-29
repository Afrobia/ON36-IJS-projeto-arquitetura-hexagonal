import { Module } from '@nestjs/common';
import { ApplicationBootstrapOptions } from '../common/application-bootstrap-options.interface';

@Module({})
export class CursoCoreModule {

  static forRoot(options: ApplicationBootstrapOptions) {
    const imports = [];

    return {
      module: CursoCoreModule,
      imports,
    };
  }
}