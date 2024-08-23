export class CreateEstudanteCommand {
  constructor(
    public readonly nome: string,
    public readonly endereco: string,
    public readonly telefone: string,
    public readonly email: string,
    public readonly anoNascimento: number,
  ) {}
}
