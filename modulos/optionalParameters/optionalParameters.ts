// 1

const informarDadosPessoa = (idPessoa: number, nome: string, email?: string) => {
    console.log('Id Funcionaário...: ', idPessoa, 'Nome...:', nome);

    if(email != undefined){
        console.log('Email...: ', email);
    }
}

informarDadosPessoa(123, 'Rafael Rocha');
informarDadosPessoa(333, 'Maria Julia', 'maju@email.com');

// 2

const mensagemLog = (mensagem: string, usuarioId?: number) => {
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usuário não conectado')
}

mensagemLog('Atualizar pagina')
mensagemLog('Usuario logado com sucesso', 14134);

// 3

type Pessoa08 = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
};

let pessoaTeste: Pessoa08;

pessoaTeste = {
    idFuncionario: 12134245,
    nome: 'Luis',
    idade: 21
}

console.log(pessoaTeste);