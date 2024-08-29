export class CreateCursosCommand {
  constructor(
    public readonly titulo: string,
    public readonly descricao: string,
  ) {}
}
