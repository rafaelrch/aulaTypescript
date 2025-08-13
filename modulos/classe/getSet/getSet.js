"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get
class Quadrado {
    constructor() {
        this.altura = 6;
        this.largura = 12;
    }
    get calcularQuadrado() {
        return this.altura * this.largura;
    }
}
console.log(new Quadrado().calcularQuadrado);
// Set
class Pessoa {
    retornarNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Rocha');
console.log('Meu nome é...: ', pessoa.nome);
// Get mais denso
class Estudante {
    constructor() {
        this._nome = 'Rafael Almeida';
    }
    get nomeEstudante() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log('O nome do estudante é ', resultado);
// Set/Get mais denso
class Estudante_02 {
    /**
     *
     */
    constructor(nome, semestre, curso) {
        this.nome = nome;
        this.semeste = semestre;
        this.curso = curso;
    }
    get cursos() {
        return this.curso;
    }
}
const estudante_02 = new Estudante_02('Rocha Rafael', 8, 'Analise e desenvolvimento de sistemas');
console.log(estudante_02);
estudante_02.curso = 'Engenharia de Software';
console.log('Curso atualizado: ', estudante_02.curso);
console.log(estudante_02);
