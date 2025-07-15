"use strict";
// Exemplo 01 - Uso de colchetes------------------------------------------------
let frutas = ['maca', 'abacaxi', 'morango'];
console.log(frutas[0]);
// Exemplo 02 - Array object ------------------------------------------------
let frutas1 = ['maca', 'abacaxi', 'morango'];
console.log(frutas1[2]);
// Exemplo 03 - Adicionando mais strings com metodo push ------------------------------------------------
let idiomas = ['Portugues', 'Ingles', 'Espanhol', 'Frances'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
// Exemplo 04 - Identificar tamanho do array ------------------------------------------------
let idiomas1 = ['Alemao', 'Ingles', 'Mandarim'];
console.log(idiomas1.length);
idiomas1.push('Frances');
console.log(idiomas1.length);
// Exemplo 05 - Exemplo de Array com Spread Operator ------------------------------------------------
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// Exemplo 06 - Exemplo de Array com laço de iteração ------------------------------------------------
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagensArray);
