import { Test, TestingModule } from '@nestjs/testing';
import { EstudantesService } from './estudantes.service';
import { EstudantesRepository } from './repository/estudantes.repository';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { Estudante } from './entities/estudante.entity';

describe('EstudantesService', () => {
  let service: EstudantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudantesService, EstudantesRepository],
    }).compile();

    service = module.get<EstudantesService>(EstudantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test("deve receber um DreateUseDto e criar um estudante", () =>{

    const createEstudanteDto: CreateEstudanteDto = {
      nome: "Baby",
      endereco: "tão, tão distante",
      telefone: "849658963256",
      email: "algumacois@gmail.com",
      idade: 18
    }

    const retornado = service.cadastrar(createEstudanteDto)

  expect(retornado).toBeInstanceOf(Estudante)

  })
});
