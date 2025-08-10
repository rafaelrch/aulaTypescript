export {}

class Pessoa {
    nome: string;
    sobrenome: string;


    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa("Rafael", "Rocha");
console.log(pessoa.nomeCompleto())