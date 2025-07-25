let nomes: string[] = ['Rafael', 'Pedro', 'Mateus'];
console.log(nomes.length - 1);

// --------------------

let nums: number[] = [10,20,30,40,50]

function exibirNumeros(numeros:number[]) {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
        
    }
}

exibirNumeros(nums);

// --------------------

let cidadesBrasil: string[] = ['Salvador', 'Rio de janeiro', 'Sao paulo', 'Fortaleza'];
console.log('O tamanho do array de cidades é ', cidadesBrasil.length);

// ----------------

let domestico: string[] = ['Cachorro', 'Gato', 'Papagaio'];
let selvagem: string[] = ['Tigre', 'Leao', 'Zebra'];
let todosAnimals: string[] = [...domestico, ...selvagem, 'Hamster'];

console.log(todosAnimals);

// ----------------

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function exibirNumeros1(numero:number[]) {
    for (let i = 0; i < numero.length; i++) {
        console.log(numero[i]);
        
    }
}

exibirNumeros1(numeros);

// ----------------

let numerosArray: number[] = [10, 20, 30, 40, 50];

function somarNumeros1(numeros: number[]) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    console.log(soma);
}

somarNumeros1(numerosArray);

// ----------------

let produtos2: string[] = ['Mouse', 'Teclado', 'Monitor'];

function listarProdutos2(produto:string[]) {
    for (let i = 0; i < produto.length; i++) {
        console.log(`${i + 1}. ${produto[i]}`)
    }
}

listarProdutos2(produtos2);



