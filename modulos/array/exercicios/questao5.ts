let produtos: string[] = ['Notebook', 'Mouse', 'Teclado'];
console.log(produtos);

function adicionarProdutos(produto: string[], ...novosProdutos: string[]): string[]{
    return [...produto ,...novosProdutos];
}

function listarProdutos(produto: string[]): void{
    for (let i = 0; i < produto.length; i++) {
        console.log(`${i + 1}.`, produto[i]);
        
    }

}

produtos = adicionarProdutos(produtos, 'Webcam', 'Mouse', 'Teclado');
listarProdutos(produtos);

