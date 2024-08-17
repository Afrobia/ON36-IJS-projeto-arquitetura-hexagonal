import { Injectable } from '@nestjs/common';
import { Estudante } from '../entities/estudante.entity';
import { randomUUID } from 'crypto';


@Injectable()
export class EstudantesRepository {
    private readonly estudantes: Estudante[] = []
    
    salvarEstudantes(estudante: Estudante):void {
        estudante.id = randomUUID()
        this.estudantes.push(estudante)
        console.log(`Salvando aluno ${estudante.nome}`) 
    }
}
