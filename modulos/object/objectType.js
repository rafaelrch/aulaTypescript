"use strict";
const pessoaEu = {
    nome: 'Rafael',
    sobrenome: 'Rocha',
    idade: 21,
    funcao: 'Desenvolvedor Full Stack'
};
console.log(pessoaEu);
// ------- object como parametros de funcao(eles podem ser anonimo)
function onboarding01(funcionario) {
    return ('Seja bem vindo ' + funcionario.nome);
}
console.log(onboarding01({ nome: 'Rafael Rocha' }));
function onboarding02(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
function onboarding03(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        ' e utilizará a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Rafael', funcao: 'Full Stack', linguagem: 'Java e Typescript' }));
function onboarding04(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        ' e utilizará a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ nome: 'Rafael', funcao: 'Full Stack', linguagem: 'Java e Typescript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        ' e utilizará a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu email será ' +
        pessoa.email);
}
console.log(onboarding05({
    nome: 'Rafael',
    funcao: 'Full Stack',
    linguagem: 'Java e Typescript',
    email: 'rafaelrocha@gmail.com'
}));
;
;
const filha = {
    nome: 'Ana Cecilia',
    sobrenome: 'Rocha',
    idade: 18
};
console.log(filha);
function raca(animal) {
    return ('A raca do cachorro é ' +
        animal.cachorro.tipo +
        ' e a raca do gato é ' +
        animal.gato.tipo);
}
console.log(raca({
    cachorro: { tipo: 'Pitbull' },
    gato: { tipo: 'Siames' }
}));
const usuario = {
    nome: 'Rafael Rocha',
    email: 'rafaelrocha@gmail.com'
};
const admin = {
    nome: 'Rafael Rocha',
    email: 'rafaelrocha@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
