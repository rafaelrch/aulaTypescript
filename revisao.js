"use strict";
let nomes = ['Rafael', 'Pedro', 'Mateus'];
console.log(nomes.length - 1);
// --------------------
let nums = [10, 20, 30, 40, 50];
function exibirNumeros(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}
exibirNumeros(nums);
// --------------------
let cidadesBrasil = ['Salvador', 'Rio de janeiro', 'Sao paulo', 'Fortaleza'];
console.log('O tamanho do array de cidades é ', cidadesBrasil.length);
// ----------------
let domestico = ['Cachorro', 'Gato', 'Papagaio'];
let selvagem = ['Tigre', 'Leao', 'Zebra'];
let todosAnimals = [...domestico, ...selvagem, 'Hamster'];
console.log(todosAnimals);
// ----------------
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function exibirNumeros1(numero) {
    for (let i = 0; i < numero.length; i++) {
        console.log(numero[i]);
    }
}
exibirNumeros1(numeros);
// ----------------
let numerosArray = [10, 20, 30, 40, 50];
function somarNumeros1(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    console.log(soma);
}
somarNumeros1(numerosArray);
// ----------------
let produtos2 = ['Mouse', 'Teclado', 'Monitor'];
function listarProdutos2(produto) {
    for (let i = 0; i < produto.length; i++) {
        console.log(`${i + 1}. ${produto[i]}`);
    }
}
listarProdutos2(produtos2);
