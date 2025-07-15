"use strict";
let produtos = ['Notebook', 'Mouse', 'Teclado'];
console.log(produtos);
function adicionarProdutos(produto, ...novosProdutos) {
    return [...produto, ...novosProdutos];
}
function listarProdutos(produto) {
    for (let i = 0; i < produto.length; i++) {
        console.log(`${i + 1}.`, produto[i]);
    }
}
produtos = adicionarProdutos(produtos, 'Webcam', 'Mouse', 'Teclado');
listarProdutos(produtos);
