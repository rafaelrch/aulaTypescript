"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let todoTarefas = [];
function mostrarMenu() {
    console.log("---------ToDo---------");
    console.log("1 - Ver Tarefas");
    console.log("2 - Adicionar Tarefa");
    console.log("3 - Editar Tarefa");
    console.log("4 - Excluir Tarefa");
    console.log("0 - Sair");
    rl.question("O que vc deseja fazer? ", (resposta) => {
        const opcao = Number(resposta);
        tratarOpcao(opcao);
    });
}
function tratarOpcao(opcao) {
    switch (opcao) {
        case 1:
            listarTarefas();
            break;
        case 2:
            adicionar();
            break;
        case 3:
            editar();
            break;
        case 4:
            excluir();
            break;
        case 0:
            console.log("Saindo...");
            rl.close();
            break;
        default:
            console.log("Opcao invalidae");
            mostrarMenu();
    }
}
function listarTarefas() {
    if (todoTarefas.length === 0) {
        console.log("Nnehuma Tarefa adicionada!");
    }
    else {
        console.log("\n Tarefas: ");
        todoTarefas.forEach((t, i) => {
            console.log(`${i + 1} - ${t.nome}`);
        });
    }
    mostrarMenu();
}
function adicionar() {
    rl.question("Digite o nome da tarefa: ", (resposta) => {
        const task = resposta;
        if (!task) {
            console.log("Tarefa invalida");
        }
        else {
            todoTarefas.push({ nome: task, status: false });
            console.log("Tarefa adicioanda com sucesso!");
        }
        mostrarMenu();
    });
}
function editar() {
    if (todoTarefas.length === 0) {
        return mostrarMenu();
    }
    console.log("\nTarefas");
    todoTarefas.forEach((t, i) => console.log(`${i + 1} - ${t.nome}`));
    rl.question("Qual tarefa vc quer editar? ", (resposta) => {
        const numTask = Number(resposta);
        const idx = numTask - 1;
        if (!Number.isInteger(numTask) || numTask <= 0 || numTask >= todoTarefas.length) {
            console.log("Invalido");
            return mostrarMenu();
        }
        rl.question("Digite a alteracao(nome): ", (resposta2) => {
            if (!resposta2) {
                console.log("Tarefa Invalida");
                return mostrarMenu();
            }
            else {
                const atual = todoTarefas[idx];
                todoTarefas[idx] = { ...atual, nome: resposta2 };
            }
            console.log("Tarefa editada com sucesso!");
            mostrarMenu();
        });
    });
}
function excluir() {
    console.log("--------Todo---------");
    todoTarefas.forEach((t, i) => console.log(`${i + 1} - ${t.nome}`));
    rl.question("Qual tarefa vc quer excluir?", (resposta) => {
        const numExcluir = Number(resposta);
        const idx = numExcluir - 1;
        if (numExcluir <= 0 || numExcluir > todoTarefas.length) {
            console.log("Escolha inválida");
            return mostrarMenu();
        }
        else {
            todoTarefas.splice(idx, 1);
            console.log("Tarefa removida com sucesso");
            return mostrarMenu();
        }
    });
}
mostrarMenu();
