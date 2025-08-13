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

class Estudante {
    private _nome = 'Rafael Almeida';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante() {
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log('O nome do estudante é ', resultado)

// Set/Get mais denso

class Estudante_02 {
    nome: string;
    semeste: number;
    curso: string;

    /**
     *
     */
    constructor(nome: string, semestre: number, curso:string) {
        this.nome = nome;
        this.semeste = semestre;
        this.curso = curso      
    }

    public get cursos(){
        return this.curso
    }

    public set cursos(setCurso: string){
         this.curso = setCurso
    }

}

const estudante_02 = new Estudante_02('Rocha Rafael', 8, 'Analise e desenvolvimento de sistemas');
console.log(estudante_02);

estudante_02.curso = 'Engenharia de Software';
console.log('Curso atualizado: ', estudante_02.curso);
console.log(estudante_02);
