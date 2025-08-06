"use strict";
// 1
function apresentar(pessoa) {
    return ('Olá, meu nome é ' +
        pessoa.nome +
        ' e tenho ' +
        pessoa.idade +
        ' anos');
}
console.log(apresentar({
    nome: 'Rafael Rocha',
    idade: 21
}));
function mostrarDados(dados) {
    return ('DADOS COMPLETOS ' +
        'Rua: ' + dados.rua +
        ' Cidade: ' + dados.cidade +
        ' Email: ' + dados.email);
}
console.log(mostrarDados({
    rua: 'Av Dom Joao VI',
    cidade: 'Salvador',
    email: 'algumacoisa@gmail.com'
}));
const livro = {
    titulo: 'Diario de um banana',
    isbn: '321'
};
function mostrarLivro(livro) {
    return ('Titulo = ' + livro.titulo +
        'isbn = ' + livro.isbn);
}
console.log(mostrarLivro({
    titulo: 'Entendendo algoritmos ',
    isbn: "123"
}));
console.log(livro.isbn);
const carroTeste = {
    ligar: () => console.log("Ligando carro..."),
    modelo: "SUV"
};
carroTeste.ligar();
const widget = {
    render: () => console.log("Renderizando..."),
    arrastar: () => console.log("Item arrastado...")
};
widget.render();
widget.arrastar();
// 6
function executarAcao(acao) {
    console.log("Iniciando ação...");
    acao();
    console.log("Ação finalizada.");
}
executarAcao(() => console.log('Executando algo importante!'));
function bemVindo(usuario) {
    return ('Seja bem-vindo ' + usuario.nome + '( ' + usuario.email + ' ). ' + 'Seu token é: ' + usuario.token);
}
console.log(bemVindo({
    nome: 'Rafael',
    email: 'rafael@email.com',
    token: 'abc123'
}));
