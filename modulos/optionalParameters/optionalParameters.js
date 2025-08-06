"use strict";
// 1
const informarDadosPessoa = (idPessoa, nome, email) => {
    console.log('Id Funcionaário...: ', idPessoa, 'Nome...:', nome);
    if (email != undefined) {
        console.log('Email...: ', email);
    }
};
informarDadosPessoa(123, 'Rafael Rocha');
informarDadosPessoa(333, 'Maria Julia', 'maju@email.com');
// 2
const mensagemLog = (mensagem, usuarioId) => {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuário não conectado');
};
mensagemLog('Atualizar pagina');
mensagemLog('Usuario logado com sucesso', 14134);
let pessoaTeste;
pessoaTeste = {
    idFuncionario: 12134245,
    nome: 'Luis',
    idade: 21
};
console.log(pessoaTeste);
