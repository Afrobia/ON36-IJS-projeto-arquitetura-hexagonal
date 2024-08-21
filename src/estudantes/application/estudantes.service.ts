import {
  ConflictException,
  ForbiddenException,
} from '@nestjs/common';
import { Estudante } from '../domain/estudante';
import { CreateEstudanteCommand } from './commands/create-estudante-command';
import { EstudanteRepositoryAdapter } from '../infraestrutura/persitence/estudantes.repository';

export class EstudantesService {
  constructor(
    private readonly estudantesRepository: EstudanteRepositoryAdapter,
  ) {}

  cadastrar(createEstudante: CreateEstudanteCommand): Promise<Estudante> {
    this.validarIdade(createEstudante.idade);

    const estudante = new Estudante(
      createEstudante.nome,
      createEstudante.endereco,
      createEstudante.telefone,
      createEstudante.email,
    );

    this.validarCadastroByEmail(estudante.email);
    return this.estudantesRepository.criar(estudante);
  }

  findByEmail(email: string): Promise<Estudante> {
    return this.estudantesRepository.buscarPorEmail(email);
  }

  validarIdade(ano: number) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;
    const IDADE_MIN_CADASTRO = 16;
    if (idade <= IDADE_MIN_CADASTRO) {
      throw new ForbiddenException('A idade mínima para cadastro é 16 anos.');
    }
  }

  validarCadastroByEmail(email: string) {
    const estudanteExistente = this.findByEmail(email);

    if (estudanteExistente) {
      throw new ConflictException('Estudante já cadastrado');
    }
  }
}
