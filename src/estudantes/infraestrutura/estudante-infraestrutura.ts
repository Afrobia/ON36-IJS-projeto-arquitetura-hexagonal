import { Module } from "@nestjs/common";
import { InFileEstudantePersistenceModule } from "./persistence/in-file/in-file-persistence.module";
import { InMemoryEstudantePersistenceModule } from "./persistence/in-memory/in-memory-persistence.module";

@Module({})
export class EstudanteInfraestruturaModule {
    static use(driver: 'in-file' | 'in-memory') {
        const persistenceModule =
          driver === 'in-file'
            ? InFileEstudantePersistenceModule
            : InMemoryEstudantePersistenceModule;
    
        return {
          module: EstudanteInfraestruturaModule,
          imports: [persistenceModule],
          exports: [persistenceModule],
        };
      }
}

/* Esse é o módulo responsável por exportar o módulo de persistência que queremos usar.
É como se ele fosse uma chave que nos permite escolher qual módulo de persistência queremos usar.
Nós podemos escolher entre os módulos de persistência existentes.
Isso é feito configurando o driver.

Ambos InFileAlunoPersistenceModule e InMemoryAlunoPersistenceModule exportam o AlunoRepository,
isso nos permite facilmente trocar de um para o outro sem precisar mudar nada no resto da aplicação. */