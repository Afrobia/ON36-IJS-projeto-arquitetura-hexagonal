import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Estudante } from '../domain/estudante';
import { CreateEstudanteCommand } from './commands/create-estudante-command';
import { EstudanteRepository } from './port/estudantes.repository';
import { EstudanteFactory } from '../domain/factory/factory';

@Injectable()
export class EstudantesService {
  constructor(
    private readonly estudantesRepository: EstudanteRepository,
    private estudanteFactory: EstudanteFactory,
  ) {}

  async cadastrar(
    createEstudanteCommand: CreateEstudanteCommand,
  ): Promise<Estudante>{
    this.validarIdadeMinima(createEstudanteCommand);
    this.validarCadastroByEmail(createEstudanteCommand);
    
    const { nome, endereco, telefone, email } = createEstudanteCommand;

    const estudante = this.estudanteFactory.criar(
      nome,
      endereco,
      telefone,
      email,
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

  async validarCadastroByEmail(createEstudanteCommand: CreateEstudanteCommand) {
    const estudanteExistente = await this.buscarEstudantePorEmail(
      createEstudanteCommand.email,
    );

    if (estudanteExistente) {
      throw new ConflictException('Estudante já cadastrado com esse email');
    }
  }

  listarEstudante() {
    return this.estudantesRepository.listar();
  }

  async buscarEstudantePorEmail(email: string): Promise<Estudante> {
    return this.estudantesRepository.buscarPorEmail(email);
  }
}
