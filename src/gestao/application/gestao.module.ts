import { Module } from '@nestjs/common';
import { GestaoService } from './gestao.service';
import { GestaoController } from '../presenter/gestao.controller';


@Module({
  controllers: [GestaoController],
  providers: [GestaoService],
})
export class GestaoModule {}
