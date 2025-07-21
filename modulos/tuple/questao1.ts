// 1 ---------

let pessoa3: [nome: string, idade: number] = ["rafael", 21];

// 2 ----------

console.log(pessoa3)


// 3 -------

let usuarios:  [string,  number][] = [
    ["mateus", 21], 
    ["Ana", 22], 
    ["pedro", 30], 
    ["rajh", 22], 
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(`Nome: ${usuarios[i][0]}, Idade: ${usuarios[i][1]}`)

}

// 4 ---------

function exibirUsuarios(user: [string, number][]) {
    for (let i = 0; i < user.length; i++) {
        console.log(`Usuario: ${user[i][0]}, Idade: ${user[i][1]}`)
    }
}

exibirUsuarios(usuarios);

// 5 --------------

type Produto = [string, number, boolean]

function getProduto(): Produto {
    return ["Mouse", 99, true]
}

console.log(getProduto())

// 6 ------

let nome2: string = "Rafael";
let idade2: number = 22;
let pessoaTupla: [string, number] = [nome2, idade2];

let pessoaCompleto: [string, number, string] = [...pessoaTupla, "Ativo"];

console.log(pessoaCompleto);

// 7 ---------

type Informacoes = [string, number, ...string[]]

function logInformacoes(...informacoes: Informacoes) {
    return [...informacoes]
}

console.log(logInformacoes("Bruna", 29, "Leitura", "Caminhada", "Cinema"))

// 8 -------

const usuarios2: [string, number] = ["Lucas", 28];
const [nome5, idade5] = usuarios2;

console.log(nome5,idade5);
console.log(usuarios2);

// 9 ----------

let config: [string, boolean] = ["Modo Escuro", false]
console.log(config);

config[1] = true;
console.log(config);