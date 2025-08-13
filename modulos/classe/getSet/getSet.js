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
