const pessoaEu = {
    nome: 'Rafael',
    sobrenome: 'Rocha',
    idade: 21,
    funcao: 'Desenvolvedor Full Stack'
};

console.log(pessoaEu);

// ------- object como parametros de funcao(eles podem ser anonimo)

function onboarding01(funcionario: { nome: string}) {
    return ('Seja bem vindo ' + funcionario.nome);
}

console.log(onboarding01({nome: 'Rafael Rocha'}));

// --------- object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa) {
    return (
        'Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        '.'
    );
}

console.log(onboarding02({nome: 'Rafael', funcao: 'Full Stack'}))

// ----- object type alias

type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onboarding03(pessoa: Pessoa03) {
    return (
        'Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        ' e utilizará a linguagem ' +
        pessoa.linguagem +
        '.'
    );
}

console.log(onboarding03({nome: 'Rafael', funcao: 'Full Stack', linguagem: 'Java e Typescript'}))

// ------- usando optional no object

interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
}

function onboarding04(pessoa: Pessoa04) {
    return (
        'Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        ' e utilizará a linguagem ' +
        pessoa.linguagem +
        '.'
    );
}

console.log(onboarding04({nome: 'Rafael', funcao: 'Full Stack', linguagem: 'Java e Typescript'}))


// -------- propriedade 'readonly' (se deseja proibir que os devs nao modifiquem um determinado objeto use o 'readonly')

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
}

function onboarding05(pessoa: Pessoa04) {
    return (
        'Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua funcao aqui na empresa será ' +
        pessoa.funcao +
        ' e utilizará a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu email será ' +
        pessoa.email
    );
}

console.log(onboarding05(
    {
        nome: 'Rafael', 
        funcao: 'Full Stack', 
        linguagem: 'Java e Typescript',
        email: 'rafaelrocha@gmail.com'
    }
));

// -------- tipos de extensoes (herancas)

interface Mae {
    nome: string;
};

interface Pai {
    sobrenome: string;
};

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: 'Ana Cecilia',
    sobrenome: 'Rocha',
    idade: 18
}

console.log(filha);

// --------- Tipos de interseções

interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}

type Animal = {
    cachorro: Cachorro;
    gato: Gato;
}

function raca(animal: Animal) {
    return (
        'A raca do cachorro é ' +
        animal.cachorro.tipo +
        ' e a raca do gato é ' +
        animal.gato.tipo
    );
}

console.log(raca(
    {
        cachorro: {tipo: 'Pitbull'},
        gato: {tipo:'Siames'}
    }
))

// ------- Generic Objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Rafael Rocha',
    email: 'rafaelrocha@gmail.com'
}

const admin: Admin = {
    nome: 'Rafael Rocha',
    email: 'rafaelrocha@gmail.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T{
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));


