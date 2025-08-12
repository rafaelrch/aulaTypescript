"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(2004, 3, 25));
// funcionario.dataNascimento = new Date(1245,10,24);
// -----------
class Funcionario01 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
// ----------
class Funcionario02 {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
}
const func = new Funcionario02('Rafael', 1234);
func.nome = 'Rafael Rocha';
// func.codigoFuncionario = 142534;
console.log(func);
const funcionario_01 = {
    codigoFuncionario: 4525346,
    nomeEmpregado: 'Jurema',
};
//funcionario_01.codigoFuncionario = 4848848;
//funcionario_01.nomeEmpregado = 'Rafael';
const funcionario_02 = {
    codigoFuncionario: 6855995,
    nomeEmpregado: 'Jurema',
};
funcionario_02.codigoFuncionario = 467400;
funcionario_02.nomeEmpregado = 'Rafael Rocha';
console.log(funcionario_02);
