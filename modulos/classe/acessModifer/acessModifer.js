"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 Public
class Estudante {
}
const estudante = new Estudante();
estudante.codigoEstudante = 123;
estudante.nomeEstudante = "Rafael";
console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);
// 2 Private
class Estudante02 {
    /**
     *
     */
    constructor(codigoEstudante, nomeEstudante, idade) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }
    retornarDados() {
        return `
        Codigo do estudante: ${this.codigoEstudante}.
        Nome do estudante: ${this.nomeEstudante}.
        Idade do estudante: ${this.idade}.
        `;
    }
}
const estudante02 = new Estudante02(4123423, 'Rafael Rocha', 21);
console.log(estudante02.retornarDados());
// 4 Protected
class Estudante03 {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}
class Pessoa extends Estudante03 {
    constructor(codigoEstudante, nomeEstudante, curso) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosAluno() {
        return `Codigo do estudante: ${this.codigoEstudante}.
        Nome do estudante: ${this.nomeEstudante}.
        Curso do estudante: ${this.curso}.`;
    }
}
const aluno = new Pessoa(333, 'Rafael Rocha Almeida', 'Engenharia de software');
console.log(aluno.retornarDadosAluno());
