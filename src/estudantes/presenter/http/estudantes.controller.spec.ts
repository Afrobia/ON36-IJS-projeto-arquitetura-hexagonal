import { Test, TestingModule } from '@nestjs/testing';
import { EstudantesController } from './estudantes.controller';
import { EstudantesService } from '../../application/estudantes.service';

  let controller: EstudantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudantesController],
      providers: [EstudantesService],
    }).compile();

    controller = module.get<EstudantesController>(EstudantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

