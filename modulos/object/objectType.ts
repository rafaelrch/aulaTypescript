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


