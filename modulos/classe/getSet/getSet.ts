export{}

// Get

class Quadrado {
    private altura: number = 6;
    private largura: number = 12;

    get calcularQuadrado() {
        return this.altura * this.largura;
    }
}

console.log(new Quadrado().calcularQuadrado)

// Set

class Pessoa {
    nome: string

    retornarNomePessoa(setNomePessoa: string){
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Rocha');
console.log('Meu nome é...: ', pessoa.nome)

// Get mais denso
