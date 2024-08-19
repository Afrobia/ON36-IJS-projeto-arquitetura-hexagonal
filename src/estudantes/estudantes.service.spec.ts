import { Test, TestingModule } from '@nestjs/testing';
import { EstudantesService } from './estudantes.service';
import { EstudantesRepository } from './repository/estudantes.repository';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { Estudante } from './entities/estudante.entity';
import { NotFoundException } from '@nestjs/common';

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

  test('deve receber um CreateEstudanteDto e criar um estudante', () => {
    const createEstudanteDto: CreateEstudanteDto = {
      nome: 'Baby',
      endereco: 'tão, tão distante',
      telefone: '849658963256',
      email: 'algumacois@gmail.com',
      idade: 18,
    };

    const retornado = service.cadastrar(createEstudanteDto);

    if (retornado instanceof Estudante) {
      expect(retornado.nome).toBe(createEstudanteDto.nome);
      expect(retornado.endereco).toBe(createEstudanteDto.endereco);
      expect(retornado.telefone).toBe(createEstudanteDto.telefone);
      expect(retornado.email).toBe(createEstudanteDto.email);
    }
  });

  test('não deve cadastrar dois estudantes com o mesmo email', () => {
    const createEstudanteDto: CreateEstudanteDto = {
      nome: 'Baby',
      endereco: 'tão, tão distante',
      telefone: '849658963256',
      email: 'algumacois@gmail.com',
      idade: 18,
    };

    const retornado = service.cadastrar(createEstudanteDto);

    if (retornado instanceof Estudante) {
      expect(()=> service.cadastrar(createEstudanteDto)).toThrow(NotFoundException);
    }
  });
});
