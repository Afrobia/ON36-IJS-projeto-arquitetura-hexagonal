import { Test, TestingModule } from '@nestjs/testing';
import { EstudantesService } from './estudantes.service';
import { Estudante } from '../domain/estudante';
import { ConflictException, ForbiddenException } from '@nestjs/common';
import { CreateEstudanteCommand } from './commands/create-estudante-command';
import { EstudanteFactory } from '../domain/factory/factory';
import { EstudanteRepository } from './port/estudantes.repository';

describe('EstudantesService', () => {
  let service: EstudantesService;
  let factory: EstudanteFactory;
  let repository: EstudanteRepository;

  const mockEstudanteRepository = {
    salvar: jest.fn(),
    buscarPorEmail: jest.fn(),
    listar: jest.fn(),
  };

  const mockEstudanteFactory = {
    criar: jest.fn(),
  };

  const estudanteTest = {
    nome: 'João',
    endereco: 'Rua 1',
    email: 'example@example.com',
    anoNascimento: 2000,
  } as CreateEstudanteCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstudantesService,
        {
          provide: EstudanteRepository,
          useValue: mockEstudanteRepository,
        },
        {
          provide: EstudanteFactory,
          useValue: mockEstudanteFactory,
        },
      ],
    }).compile();

    factory = module.get<EstudanteFactory>(EstudanteFactory);
    repository = module.get<EstudanteRepository>(EstudanteRepository);
    service = module.get<EstudantesService>(EstudantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('deve receber um CreateEstudante e criar um estudante', () => {
    const createEstudante: CreateEstudanteCommand = {
      nome: 'Baby',
      endereco: 'tão, tão distante',
      telefone: '849658963256',
      email: 'algumacois@gmail.com',
      anoNascimento: 2000,
    };
    
    let id = '123';
    let cursos = [];

    const estudante = new Estudante(
      id,
      createEstudante.nome,
      createEstudante.endereco,
      createEstudante.telefone,
      createEstudante.email,
      cursos,
    );
    mockEstudanteFactory.criar.mockReturnValue(estudante);
    mockEstudanteRepository.salvar.mockResolvedValue(estudante);

    const retornado = service.cadastrar(createEstudante);

    if (retornado instanceof Estudante) {
      expect(retornado.id).toBeDefined();
      expect(retornado.nome).toBe(createEstudante.nome);
      expect(retornado.endereco).toBe(createEstudante.endereco);
      expect(retornado.telefone).toBe(createEstudante.telefone);
      expect(retornado.email).toBe(createEstudante.email);
      expect(retornado.cursos).toStrictEqual([]);
    }
  });

  test('deve lançar uma ForbiddenException quando a idade da pessoa for menor que 16', () => {
    const estudanteTestMenor16 = {
      ...estudanteTest,
      anoNascimento: new Date().getFullYear() - 16,
    } as CreateEstudanteCommand;

    expect(() => service.cadastrar(estudanteTestMenor16)).toThrow(
      ForbiddenException,
    );
  });

  it('não deve persistir a data de nascimento', () => {
    const alunoCriado = service.cadastrar(estudanteTest);
    expect(alunoCriado).toBeInstanceOf(Estudante);
    expect(alunoCriado).not.toHaveProperty('anoNascimento');
  });

  test('não deve cadastrar dois estudantes com o mesmo email', () => {
    const createEstudante: CreateEstudanteCommand = {
      nome: 'Baby',
      endereco: 'tão, tão distante',
      telefone: '849658963256',
      email: 'algumacois@gmail.com',
      anoNascimento: 2000,
    };

    const retornado = service.cadastrar(createEstudante);

    if (retornado instanceof Estudante) {
      expect(() => service.cadastrar(createEstudante)).toThrow(
        ConflictException,
      );
    }
  });
});
