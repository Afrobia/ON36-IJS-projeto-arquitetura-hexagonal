import { Module } from "@nestjs/common";
import { EstudanteRepository } from "../../../application/port/estudantes.repository";
import { InFileEstudanteRepository } from "./estudantes.repository";

@Module({
    imports: [],
    providers: [
      {
        provide: EstudanteRepository,
        useClass: InFileEstudanteRepository,
      },
    ],
    exports: [EstudanteRepository],
  })
  export class InFileEstudantePersistenceModule {}