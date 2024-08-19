import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { Estudante } from './entities/estudante.entity';
import { EstudantesRepository } from './repository/estudantes.repository';

@Injectable()
export class EstudantesService {
  constructor(private readonly estudantesRepository: EstudantesRepository) {}

  cadastrar(createEstudanteDto: CreateEstudanteDto): Estudante {
    this.validarCadastro(createEstudanteDto.email);
    //criar um novo aluno
    const estudante = new Estudante(
      createEstudanteDto.nome,
      createEstudanteDto.endereco,
      createEstudanteDto.telefone,
      createEstudanteDto.email,
    );

    return this.estudantesRepository.salvarEstudantes(estudante);
  }

  findByEmail(email: string): Estudante {
    return this.estudantesRepository.findByEmail(email)
  }

  validarCadastro(email: string) {
    const estudante = this.findByEmail(email);

    if (estudante) {
      throw new NotFoundException('Estudante já cadastrado');
    }

  }

}
