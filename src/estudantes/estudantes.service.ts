import { Injectable } from '@nestjs/common';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { Estudante } from './entities/estudante.entity';
import { EstudantesRepository } from './repository/estudantes.repository';

@Injectable()
export class EstudantesService {
  constructor(private readonly estudantesRepository: EstudantesRepository) {}

  cadastrar(createEstudanteDto: CreateEstudanteDto) {
    //criar um novo aluno
    const estudante = new Estudante(
      createEstudanteDto.nome,
      createEstudanteDto.endereco,
      createEstudanteDto.telefone,
      createEstudanteDto.email,
    );
    //instanciar
    this.estudantesRepository.salvarEstudantes(estudante);
    return 'This action adds a new estudante';
  }
   //verificar se tem outro aluno com o mesmo email
   //verificar a lista de alunos e verifica se tem o mesmo email, vou lancar uma execeção caso exista
}
