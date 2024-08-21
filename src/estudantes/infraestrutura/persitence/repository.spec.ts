import { EstudantesRepository } from "./estudantes.repository";


describe('Repository', () => {
  it('should be defined', () => {
    expect(new EstudantesRepository()).toBeDefined();
  });
});
