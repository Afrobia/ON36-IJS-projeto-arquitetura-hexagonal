import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Estudante } from "../estudante";

@Injectable()
export class EstudanteFactory {
  criar(nome: string, endereco: string,telefone: string,email: string): Estudante {
    const id = randomUUID();
    const alunoCurso = [];
    return new Estudante(id, nome, endereco, telefone, email, alunoCurso);
  }
}