"use strict";
let numerosParaTransformar = [1, 4, 5, 8, 9, 12];
let numerosMultiploTres = [];
function transformarNumeros(numero) {
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] % 2 == 0) {
            numerosMultiploTres.push(numero[i] * 3);
        }
    }
    return numerosMultiploTres;
}
console.log(transformarNumeros(numerosParaTransformar));
