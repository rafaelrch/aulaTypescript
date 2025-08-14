"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
class Produto {
    /**
     *
     */
    constructor(_preco) {
        this._preco = _preco;
    }
    ;
    get getPreco() {
        return this._preco;
    }
    ;
    set setPreco(setPreco) {
        if (setPreco < 0) {
            this._preco = 0;
        }
        else {
            this._preco = setPreco;
        }
    }
    ;
    exibirInfo() {
        return `R$${this._preco}`;
    }
}
const produto = new Produto(30);
console.log('Preço atual:', produto.exibirInfo());
produto.setPreco = 50;
console.log('Preço atualizado:', produto.exibirInfo());
// 2
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    get getSalario() {
        return this.salario;
    }
    promover(novoCargo, aumento) {
        this.cargo = novoCargo;
        this.salario = aumento;
    }
    exibirDados() {
        return `Nome: ${this.nome}. 
        Cargo: ${this.cargo}.
        Salario: R$${this.salario}`;
    }
}
const funcionario = new Funcionario('Pedro', 'Desenvolvedor Jr', 2000);
console.log('Dados atual funcionario : ', funcionario.exibirDados());
funcionario.promover('Desenvolvedor Pleno', 500);
console.log('Dados do funcionario atualizado: ', funcionario.exibirDados());
class Gerente extends Funcionario {
    constructor(nome, cargo, salario) {
        super(nome, cargo, salario);
    }
    exibirDadosGerente() {
        return `Nome: ${this.nome}. 
        Cargo: ${this.cargo}`;
    }
}
const gerente = new Gerente('Mateus', 'RH', 2900);
console.log('Dados do atual do gerente: ', gerente.exibirDadosGerente());
