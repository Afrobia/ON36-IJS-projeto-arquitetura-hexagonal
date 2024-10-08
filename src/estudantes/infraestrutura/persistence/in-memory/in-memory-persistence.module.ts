import { Module } from "@nestjs/common";
import { EstudanteRepository } from "../../../application/port/estudantes.repository";
import { InMemoryEstudanteRepository } from "./estudantes.repository";


@Module({
    imports: [],
    providers: [
      {
        provide: EstudanteRepository,
        useClass: InMemoryEstudanteRepository, // É aqui que nós vinculamos uma porta e a um adaptador (a ideia aqui é dizer para o NestJS usar o InMemoryAlunoRepository sempre que alguém pedir por um AlunoRepository - isso facilita muito a troca de adaptadores, vc não precisa mudar nada no resto do código, só aqui).
      },
    ],
    exports: [EstudanteRepository],
  })
  export class InMemoryEstudantePersistenceModule {}