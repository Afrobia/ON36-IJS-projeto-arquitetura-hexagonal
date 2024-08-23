import { Module } from "@nestjs/common";
import { CursoRepository } from "src/cursos/application/port/curso.repository";
import { InMemoryCursoRepository } from "./curso.repositiry";

@Module({
    imports: [],
    providers: [
      {
        provide: CursoRepository,
        useClass: InMemoryCursoRepository, 
      },
    ],
    exports: [CursoRepository],
  })
  export class InMemoryCursoPersistenceModule {}