import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Tarefa {
    nome: string
    status: boolean
}

let todoTarefas: Tarefa[] = [];

function mostrarMenu(){
    console.log("---------ToDo---------");

    console.log("1 - Ver Tarefas");
    console.log("2 - Adicionar Tarefa");
    console.log("3 - Editar Tarefa");
    console.log("0 - Sair");
    
    rl.question("O que vc deseja fazer? ", (resposta) => {
        const opcao = Number(resposta)
        tratarOpcao(opcao)
})

}

function tratarOpcao(opcao: number){

    switch(opcao){
        case 1:
            listarTarefas()
        break;
        
        case 2:
            adicionar();
        break;

        case 3:
            editar();
        break;

        case 0:
            console.log("Saindo...")
            rl.close()
        break;

        default:
            console.log("Opcao invalidae")
            mostrarMenu();
    }
} 

function listarTarefas(){
    if(todoTarefas.length === 0){
        console.log("Nnehuma Tarefa adicionada!")
    }else{
        console.log("\n Tarefas: ");
        todoTarefas.forEach((t, i) => {
            console.log(`${i+1} - ${t.nome}`)
        })
    }

    mostrarMenu()
}

function adicionar(){
    rl.question("Digite o nome da tarefa: ", (resposta) => {
        const task = resposta
        if(!task){
            console.log("Tarefa invalida")
        }else{
            todoTarefas.push({nome: task, status: false})
            console.log("Tarefa adicioanda com sucesso!")

        }
        mostrarMenu()
    });
}

function editar(){
    rl.question("Qual tarefa vc quer editar? ", (resposta) => {
        const numTask = Number(resposta)
        if(numTask <= 0){
            console.log("Invalido")
        }else{
            rl.question("Digite a alteracao: ", (resposta2) => {
                const taskEditada = resposta2;
                todoTarefas[numTask] = {nome: taskEditada, status: false};
            })

        }
    });
}

mostrarMenu()



