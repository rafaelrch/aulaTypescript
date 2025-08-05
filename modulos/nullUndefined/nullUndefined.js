"use strict";
// --
let variavelTesteNull = null;
console.log(variavelTesteNull);
console.log(typeof variavelTesteNull);
// -------
let variavelTesteUndefined;
console.log(variavelTesteUndefined);
console.log(typeof variavelTesteUndefined);
console.log('Exemplo 01:', null == undefined);
console.log('Exemplo 02:', null === undefined);
let ratio;
if (ratio === undefined) {
    console.log('Someone forgot to assign a value.');
}
else if (ratio === null) {
    console.log('Someone chose not to assign a value.');
}
//--------
let total;
// --------
function buscarEmailPorId(id) {
    if (id === '1') {
        return 'user@email.com';
    }
    return null; // Corrija a tipagem para aceitar esse retorno
}
// ---------
let info = undefined;
// Complete o if para mostrar "Sem informação" se info for null OU undefined
if (!info == null) {
    console.log('Sem informação');
}
//--------
function saudacao(nome) {
    if (nome === null || nome === undefined) {
        console.log('Olá, visitante!');
    }
    else {
        console.log('Olá, ', nome);
    }
}
