// 1

interface Pessoa07 {
    nome: string;
    idade: number;
}

function apresentar(pessoa: Pessoa07): string {
    return (
        'Olá, meu nome é ' +
        pessoa.nome +
        ' e tenho ' +
        pessoa.idade +
        ' anos'
    )
}

console.log(apresentar(
    {
        nome: 'Rafael Rocha',
        idade: 21
    }
))

// 2

interface Endereco {
    rua: string;
    cidade: string;
}

interface Contato {
    email: string;
}

type DadosCompletos = Endereco & Contato;

function mostrarDados(dados: DadosCompletos): string {
    return (
        'DADOS COMPLETOS ' +
        'Rua: ' + dados.rua +
        ' Cidade: ' + dados.cidade +
        ' Email: ' + dados.email
    )
}

console.log(mostrarDados(
    { 
        rua: 'Av Dom Joao VI',
        cidade: 'Salvador',
        email: 'algumacoisa@gmail.com'
    }
));

// 3

type Livro = {
    titulo: string;
    readonly isbn: string;
}

const livro: Livro = {
    titulo: 'Diario de um banana',
    isbn: '321'
}

function mostrarLivro(livro: Livro) {
    return (
        'Titulo = ' + livro.titulo +
        'isbn = ' + livro.isbn
    )
}

console.log(mostrarLivro(
    {
        titulo: 'Entendendo algoritmos ',
        isbn: "123"
    }
))

console.log(livro.isbn);

// 4

interface Veiculo {
    ligar: () => void;
}

interface Carro extends Veiculo{
    modelo: string;
}

const carroTeste: Carro = {
    ligar: () => console.log("Ligando carro..."),
    modelo: "SUV"
}

carroTeste.ligar();

// 6

type ComponenteVisual = {
    render: () => void;
}

type Arrastavel = {
    arrastar: () => void;
}

type Widget = ComponenteVisual & Arrastavel;

const widget: Widget = {
    render: () => console.log("Renderizando..."),
    arrastar: () => console.log("Item arrastado...")
}

widget.render();
widget.arrastar();

// 7

type UsuarioLogado2 = {
    nome: string;
    email: string;
    token: string;
}

function bemVindo(usuario: UsuarioLogado2): string {
    return (
        'Seja bem-vindo ' + usuario.nome + '( ' + usuario.email + ' ). ' + 'Seu token é: ' + usuario.token
    )
}

console.log(bemVindo(
    {
        nome: 'Rafael',
        email: 'rafael@email.com',
        token: 'abc123'
    }
))




