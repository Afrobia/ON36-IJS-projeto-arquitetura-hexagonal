import { Estudante } from '../../domain/estudante';
import { EstudanteEntity } from './estudantes.entity';


export class EstudanteMapper {
  static paraDominio(estudanteEntity: EstudanteEntity): Estudante {
    const model = new Estudante(
      estudanteEntity.id,
      estudanteEntity.nome,
      estudanteEntity.endereco,
      estudanteEntity.telefone,
      estudanteEntity.email,
      estudanteEntity.cursos,
    );
    return model;
  }

  static paraPersistencia(estudante: Estudante) {
    const entity = new EstudanteEntity();
    entity.id = estudante.id;
    entity.nome = estudante.nome;
    entity.endereco = estudante.endereco;
    entity.telefone = estudante.telefone;
    entity.email = estudante.email;
    entity.cursos = estudante.cursos;
    
    return entity;
  }
}

// Aqui não temos nenhuma dependencia externa, poderíamos extrair esse arquivo para uma pasta compartilhada entre os adaptadores.
// Neste cenário atual não é necessário, mas adaptadores mais sofisticados podem ser diferentes, então é bom manter isso em mente.
// Para evitar problemas vamos manter ele aqui por enquanto (eu darei um desconto pra vcs se justificarem essa repetição de código, fora isso não aceito).
