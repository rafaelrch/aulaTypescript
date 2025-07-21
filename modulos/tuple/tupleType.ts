let pessoa: [string, string, number];
pessoa = ['Rafael Rocha', 'Software Enginner', 21];

console.log(pessoa);

// ---------------------

let pessoa1: [string, string, number];
pessoa1 = ['Rafael Rocha', 'Software Enginner', 21];

console.log(pessoa1[0]);

// ---------------------

let pessoa2: [nome: string, profissao:string, idade: number] = ['Rafael Rocha', 'Software Enginner', 21];

console.log(pessoa2);

// ---------------------

let listaFrutas: [string, ...string[]] = ['🍓', '🍊', '🍎'];
console.log(...listaFrutas);

// ---------------------

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2)


// ---------------------

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let pessoas = listarPessoas(["Rafael", "Maria Julia"], [21,21]);
console.log(pessoas);

// ---------------------

type Nome =
    | [primeiroNome: string, sobrenome:string]
    | [primeiroNome: string,  nomeMeio:string, sobrenome:string]

function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa('Rafael', 'Rocha'));
console.log(criarPessoa('Rafael', 'Almeida', 'Rocha'));


