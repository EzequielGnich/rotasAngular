import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'Angular2' },
      { id: 2, nome: 'JavaScript' },
      { id: 3, nome: 'ReactJs' }
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();

    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
        return curso;

    }
    return null;
  }
}
