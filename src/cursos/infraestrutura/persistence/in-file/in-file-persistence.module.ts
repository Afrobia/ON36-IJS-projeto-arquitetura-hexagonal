import { Module } from "@nestjs/common";
import { CursoRepository } from "src/cursos/application/port/curso.repository";
import { InFileCursoRepository } from "./cursos.repository";

@Module({
    imports: [],
    providers: [
      {
        provide: CursoRepository,
        useClass: InFileCursoRepository,
      },
    ],
    exports: [CursoRepository],
  })
  export class InFileCursoPersistenceModule {}