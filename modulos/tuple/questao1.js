"use strict";
// 1 ---------
let pessoa3 = ["rafael", 21];
// 2 ----------
console.log(pessoa3);
// 3 -------
let usuarios = [
    ["mateus", 21],
    ["Ana", 22],
    ["pedro", 30],
    ["rajh", 22],
];
for (let i = 0; i < usuarios.length; i++) {
    console.log(`Nome: ${usuarios[i][0]}, Idade: ${usuarios[i][1]}`);
}
// 4 ---------
function exibirUsuarios(user) {
    for (let i = 0; i < user.length; i++) {
        console.log(`Usuario: ${user[i][0]}, Idade: ${user[i][1]}`);
    }
}
exibirUsuarios(usuarios);
function getProduto() {
    return ["Mouse", 99, true];
}
console.log(getProduto());
// 6 ------
let nome2 = "Rafael";
let idade2 = 22;
let pessoaTupla = [nome2, idade2];
let pessoaCompleto = [...pessoaTupla, "Ativo"];
console.log(pessoaCompleto);
function logInformacoes(...informacoes) {
    return [...informacoes];
}
console.log(logInformacoes("Bruna", 29, "Leitura", "Caminhada", "Cinema"));
// 8 -------
const usuarios2 = ["Lucas", 28];
const [nome5, idade5] = usuarios2;
console.log(nome5, idade5);
console.log(usuarios2);
// 9 ----------
let config = ["Modo Escuro", false];
console.log(config);
config[1] = true;
console.log(config);
