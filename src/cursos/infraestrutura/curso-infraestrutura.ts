import { Module } from "@nestjs/common";
import { InFileCursoPersistenceModule } from "./persistence/in-file/in-file-persistence.module";
import { InMemoryCursoPersistenceModule } from "./persistence/in-memory/in-memory-persistence.module";

@Module({})
export class CursoInfraestruturaModule {
    static use(driver: 'in-file' | 'in-memory') {
        const persistenceModule =
          driver === 'in-file'
            ? InFileCursoPersistenceModule
            : InMemoryCursoPersistenceModule;
    
        return {
          module: CursoInfraestruturaModule,
          imports: [persistenceModule],
          exports: [persistenceModule],
        };
      }
}