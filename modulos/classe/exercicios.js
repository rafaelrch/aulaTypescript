"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
