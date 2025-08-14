"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    constructor(_titular, _saldo) {
        this._titular = _titular;
        this._saldo = _saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        if (valor !== this._saldo) {
            this._saldo = valor;
            console.log(`Saldo atualizado: R$${this._saldo}`);
        }
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log("Deposito inválido");
            return false;
        }
        this.saldo = this._saldo + valor;
        return true;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log('Valor insuficiente');
            return false;
        }
        else {
            this.saldo = this._saldo - valor;
            return true;
        }
    }
}
const conta = new ContaBancaria('Rafael', 3000);
console.log('Saldo: ', conta.saldo);
conta.depositar(500);
conta.sacar(200);
console.log('Novo saldo: ', conta.saldo);
conta.sacar(3000);
console.log('Novo saldo: ', conta.saldo);
// 2
console.log("----------------------");
class Carro {
    constructor(modelo, _velocidade) {
        this._velocidade = _velocidade;
        this.modelo = modelo;
    }
    get velocidade() {
        return this._velocidade;
    }
    set velocidade(setVelocidade) {
        if (setVelocidade >= 200) {
            console.log('Vc atingiu a velocidade maxima de 200km/h');
        }
        else {
            this._velocidade += setVelocidade;
        }
    }
    acelerar(valor) {
        if (valor <= 0) {
            console.log("Valor de aceleracao invalido");
        }
        this.velocidade = this._velocidade + valor;
    }
    frear(valor) {
        if (valor <= 0) {
            console.log("Valor de feragem invalido");
        }
        this.velocidade = this._velocidade - valor;
    }
}
const carro = new Carro('Ferrari', 100);
console.log("Velocidade atual: ", carro.velocidade, "km/h");
console.log("Acelerando... ");
carro.acelerar(100);
console.log("Freando... ");
carro.frear(20);
console.log("Velocidade atual: ", carro.velocidade, "km/h");
console.log("Acelerando... ");
carro.velocidade = 20;
console.log("Velocidade atual:", carro.velocidade, "km/h");
