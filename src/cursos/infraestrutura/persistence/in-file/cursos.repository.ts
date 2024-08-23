import { Injectable } from "@nestjs/common";
import { CursoRepository } from "../../../../cursos/application/port/curso.repository";
import { Curso } from "src/cursos/domain/curso";

@Injectable()
export class InFileCursoRepository implements CursoRepository{
    async salvarCurso(curso: Curso): Promise<Curso> {
        throw new Error("Method not implemented.");
    }
    async listarCurso(): Promise<Curso[]> {
        throw new Error("Method not implemented.");
    }
    async buscarPorTitulo(titulo: string): Promise<Curso> {
        throw new Error("Method not implemented.");
    }

}