// 1

function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
};

console.log(descontoCompra(100));

// 2

function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!') {
    return saudar + ' ' + mensagem + '!';
}

console.log(exibirMensagem('JavaScript Developers'))

// 3

function exibirNome(nome: string, sobrenome = 'Rocha') {
    return nome + ' ' + sobrenome;
}

const resultado_1 = exibirNome('Rafael');
const resultado_2 = exibirNome('Glaucia', undefined)
const resultado_3 = exibirNome('Rafael', 'Almeida Rocha')

console.log(resultado_1);
console.log(resultado_2);
console.log(resultado_3);
