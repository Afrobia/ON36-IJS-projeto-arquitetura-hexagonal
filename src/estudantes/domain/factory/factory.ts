import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Estudante } from "../estudante";

@Injectable()
export class EstudanteFactory {
  criar(nome: string, endereco: string,telefone: string,email: string) {
    const estudanteId = randomUUID();
    const alunoCurso = [];
    return new Estudante(estudanteId, nome, endereco, telefone, email, alunoCurso);
  }
}