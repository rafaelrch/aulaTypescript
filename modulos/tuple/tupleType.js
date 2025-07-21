"use strict";
let pessoa;
pessoa = ['Rafael Rocha', 'Software Enginner', 21];
console.log(pessoa);
// ---------------------
let pessoa1;
pessoa1 = ['Rafael Rocha', 'Software Enginner', 21];
console.log(pessoa1[0]);
// ---------------------
let pessoa2 = ['Rafael Rocha', 'Software Enginner', 21];
console.log(pessoa2);
// ---------------------
let listaFrutas = ['🍓', '🍊', '🍎'];
console.log(...listaFrutas);
// ---------------------
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ---------------------
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let pessoas = listarPessoas(["Rafael", "Maria Julia"], [21, 21]);
console.log(pessoas);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Rafael', 'Rocha'));
console.log(criarPessoa('Rafael', 'Almeida', 'Rocha'));
