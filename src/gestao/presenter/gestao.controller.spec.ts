import { Test, TestingModule } from '@nestjs/testing';
import { GestaoController } from './gestao.controller';
import { GestaoService } from '../application/gestao.service';


describe('GestaoController', () => {
  let controller: GestaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestaoController],
      providers: [GestaoService],
    }).compile();

    controller = module.get<GestaoController>(GestaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
