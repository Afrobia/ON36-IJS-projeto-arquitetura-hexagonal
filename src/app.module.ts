import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudantesModule } from './estudantes/application/estudantes.module';

@Module({
  imports: [EstudantesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
