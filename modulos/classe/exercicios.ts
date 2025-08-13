export {}


// 1

class Produto{
    private _preco: number;

    /**
     *
     */
    constructor(_preco: number) {
        this._preco = _preco;
    };

    public get getPreco() {
        return this._preco
    };

    public set setPreco(setPreco: number){
        if(setPreco < 0){
            this._preco = 0;
        }else{
            this._preco = setPreco;
        }
    };

    exibirInfo(){
        return `R$${this._preco}`
    }

}

const produto = new Produto(30);
console.log('Preço atual:', produto.exibirInfo())
produto.setPreco = 50;
console.log('Preço atualizado:', produto.exibirInfo())

// 2

class Funcionario{
    nome: string;
    protected cargo: string;
    private salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    public get getSalario(){
        return this.salario
    }

    promover(novoCargo: string, aumento: number){
        this.cargo = novoCargo;
        this.salario = aumento;
    }

    exibirDados(){
        return `Nome: ${this.nome}. 
        Cargo: ${this.cargo}.
        Salario: R$${this.salario}`
    }
}

const funcionario = new Funcionario('Pedro', 'Desenvolvedor Jr', 2000);
console.log(
    'Dados atual funcionario : ', 
    funcionario.exibirDados()
    
)

funcionario.promover('Desenvolvedor Pleno', 500)
console.log(
    'Dados do funcionario atualizado: ', funcionario.exibirDados()
    
)


class Gerente extends Funcionario {
    
    constructor(nome: string, cargo: string, salario: number) {
        super(nome, cargo, salario)
    }

    exibirDadosGerente(){
        return `Nome: ${this.nome}. 
        Cargo: ${this.cargo}`
    }
}

const gerente = new Gerente('Mateus', 'RH', 2900)
console.log(
    'Dados do atual do gerente: ', gerente.exibirDadosGerente()
    
)

// 3

