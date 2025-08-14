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
    depositar(valor) {
        return this._saldo += valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return 'Valor insuficiente';
        }
        else {
            return this._saldo -= valor;
        }
    }
}
const conta = new ContaBancaria('Rafael', 2000);
console.log('Saldo: ', conta.saldo);
conta.depositar(500);
conta.sacar(200);
console.log('Novo saldo: ', conta.saldo);
conta.sacar(2500);
console.log('Novo saldo: ', conta.saldo);
