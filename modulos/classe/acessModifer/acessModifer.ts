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

// 3 Private

// 4 Protected

// 5 Readonly


