// questao 1 - Crie uma interface Pessoa com nome e idade. Em seguida, crie uma interface Funcionario que herda Pessoa e adiciona o campo cargo.

interface Pessoa {
    nome: string;
    idade: number;
}

interface Funcionario extends Pessoa {
    cargo: string;
}

// questao 2 - Crie dois tipos: Usuario (com nome) e Autenticado (com token). Depois, crie um tipo UsuarioLogado que junte os dois.

type Usuario2 = {
    nome: string;
}

type Autenticacao = {
    token: string;
}

type UsuarioLogado = Usuario2 & Autenticacao;

// questao 3 - Dado um tipo Produto com nome e preco, torne o nome somente leitura usando readonly.

type Produto2 = {
    readonly nome: string;
    preco: number;
}

// questao 4 - Crie uma interface Animal com tipo. Depois, crie um novo tipo chamado Pet que seja a junção de Animal com outro tipo que contenha dono: string.


type Animal2 = {
    tipo: string;
}

type Dono = {
    dono: string;
}

type Pet = Animal2 & Dono;

// questao 5 - Crie um objeto do tipo Admin que estende um tipo base Usuario, mas adiciona o campo permissao: "total".

interface Admin2 extends Usuario2 {
    permissao: "total";
}

// questao 6 - Crie um tipo Movel com um método mover(), e outro tipo Atirador com atirar(). Crie um tipo RoboDeCombate que junte os dois e instancie um objeto do tipo.

type Movel = {
    mover: () => void;
}

type Atirador = {
    atirar: () => void;
}

type RoboDeCombate = Movel & Atirador;


const robo: RoboDeCombate = {
    mover: () => console.log('Andando...'),
    atirar: () => console.log('Piu...Piu...')
}

robo.mover();
robo.atirar();

// questao 7 - Crie um tipo Pessoa com nome e idade, e depois crie um tipo PessoaResumida que herde apenas o campo nome. Use type ou interface.

type Pessoa06 = {
    nome: string;
    idade: number;
}

interface PessoaResumida extends Pessoa06{nome: string};
