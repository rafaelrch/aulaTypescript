"use strict";
// 1
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
console.log(somarNumeros(30, 50));
console.log(somarNumeros(40, 30, 50, 30, 20));
// 2
function listarFrutas(frase, ...frutas) {
    return frase + ' ' + frutas.join(',');
}
console.log(listarFrutas('Rafael, vc precisa na feira comprar... : ', 'COCO', 'ABACAXI', 'MORANGO', 'BANANA'));
// 3
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInformatica = new Produtos();
console.log('Todos os produtos do departamento de Informatica disponiveis no estoque...: ');
departamentoInformatica.exibirProdutos('Mouse', 'Notebook', 'Monitor', 'Teclado', 'WebCam');
