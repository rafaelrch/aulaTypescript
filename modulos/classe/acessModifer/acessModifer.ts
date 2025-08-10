export {}

// 1 Public

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string
}

const estudante = new Estudante();
estudante.codigoEstudante = 123;
estudante.nomeEstudante = "Rafael";

console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);

// 2 Private

class Estudante02 {
    codigoEstudante: number;
    nomeEstudante: string
    private idade: number;

    /**
     *
     */
    constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    retornarDados() {
        return `
        Codigo do estudante: ${this.codigoEstudante}.
        Nome do estudante: ${this.nomeEstudante}.
        Idade do estudante: ${this.idade}.
        `
    }
}

const estudante02 = new Estudante02(4123423, 'Rafael Rocha', 21);
console.log(estudante02.retornarDados());


// 4 Protected

class Estudante03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante03{
    private curso: string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }

    retornarDadosAluno() {
        return `Codigo do estudante: ${this.codigoEstudante}.
        Nome do estudante: ${this.nomeEstudante}.
        Curso do estudante: ${this.curso}.`;
    }
}

const aluno = new Pessoa(333, 'Rafael Rocha Almeida', 'Engenharia de software');
console.log(aluno.retornarDadosAluno())

