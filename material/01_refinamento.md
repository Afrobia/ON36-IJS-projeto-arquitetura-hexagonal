# Requisitos funcionais

- Deve ser possivel cadastrar um aluno;
- Deve cadastra professor;
- Deve ser possível se matricular em cursos oferecidos;
- Deve ser possivel editar um curso
- Deve ser possivel listar os alunos matriculados em um determinado curso;
- Deve ser possivel registrar a presença dos alunos nas aulas do curso;


## Regras de negócio

Quem pode ser aluno?
 - todas as pessoas +16( professores e estudantes)
Quais as informações necessárias
- pessoas(id, nome, endereço, telefone)
Quais os requisitos prara ser Professora?
- se já fez o curso pode ser professor
- Não pode haver duplicicação de registros de alunos, cursos e professores- identificador único
- o aluno só pode se matricular em um curso disponível
- o aluno pode ter vários curso, mas que não tenham conflito de horários
- não existe restrição local;
- uma pessoa não pode ser alino de uma turma em que é professora

-O numero máximo de estudante por turma e o número mínimo é um
-não tem banco de dados

## Dicas

- testes são essenciais para validar as regras de negocio dentro do projeto legado
- quais valores isso entrega e monitorar a necessidade
- que ordem de entrega de funcionalidades, entrega mais valor para as pessoas que vão utilizar o nosso sistema?
