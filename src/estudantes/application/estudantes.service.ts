import { ConflictException, ForbiddenException } from '@nestjs/common';
import { Estudante } from '../domain/estudante';
import { CreateEstudanteCommand } from './commands/create-estudante-command';
import { EstudanteRepository } from './port/estudantes.repository';
import { EstudanteFactory } from '../domain/factory/factory';

export class EstudantesService {
  constructor(
    private readonly estudantesRepository: EstudanteRepository,
    private readonly estudanteFactory: EstudanteFactory
  ) {}

  async cadastrar(createEstudanteCommand: CreateEstudanteCommand): Promise<Estudante> {
    this.validarIdadeMinima(createEstudanteCommand);
    this.validarCadastroByEmail(createEstudanteCommand)

    const estudante =this.estudanteFactory.criar(
      createEstudanteCommand.nome,
      createEstudanteCommand.endereco,
      createEstudanteCommand.telefone,
      createEstudanteCommand.email,
    );

    return await this.estudantesRepository.salvar(estudante);
  }


  validarIdadeMinima(createEstudanteCommand: CreateEstudanteCommand) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - createEstudanteCommand.anoNascimento;
    const IDADE_MIN_CADASTRO = 16;
    if (idade <= IDADE_MIN_CADASTRO) {
      throw new ForbiddenException('A idade mínima para cadastro é 16 anos.');
    }
  }

  validarCadastroByEmail(createEstudanteCommand:CreateEstudanteCommand) {
    const estudanteExistente = this.estudantesRepository.buscarPorEmail(createEstudanteCommand.email)

    if (estudanteExistente) {
      throw new ConflictException('Estudante já cadastrado com esse email');
    }
  }

  listarEstudante(){
    return this.estudantesRepository.listar()
  }
}
