"use strict";
let listaNotas = [8.5, 9.2, 7.8, 6.5, 9.0];
console.log('Primeira nota: ', listaNotas[0]);
console.log('Ultima Nota: ', listaNotas[listaNotas.length - 1]);
function funcaoNotas(notas) {
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i]);
    }
}
console.log('Todas as notas: ');
funcaoNotas(listaNotas);
