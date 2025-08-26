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
function exibirMenu() {
    console.log("MENU TO-DO");
    console.log("1 - Ver tarefas");
    console.log("2 - Adicionar");
    console.log("3 - Editar");
    console.log("4 - Excluir");
    console.log("0 - Sair");
    rl.question("Qual opção você deseja?", (resposta) => {
        const opc = Number(resposta);
        tratarOpc(opc);
    });
}
function tratarOpc(opc) {
    switch (opc) {
        case 1:
            exibirTarefas();
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
            console.log("Opcao invalida");
            exibirMenu();
    }
}
function exibirTarefas() {
    if (todoTarefas.length === 0) {
        console.log("Nenhuma tarefa adicionada");
        return exibirMenu();
    }
    else {
        console.log("TAREFAS");
        todoTarefas.forEach((t, i) => {
            console.log(`${i + 1}. ${t.nome}`);
        });
    }
    exibirMenu();
}
function adicionar() {
    rl.question("Escreva o nome da tarefa: ", (resposta) => {
        const nomeTarefa = resposta;
        if (!nomeTarefa) {
            console.log("Tarefa Inválida");
        }
        else {
            todoTarefas.push({ nome: nomeTarefa });
            console.log("Tarefa adicionada com sucesso!");
        }
        return exibirMenu();
    });
}
function editar() {
    if (todoTarefas.length === 0) {
        exibirMenu();
    }
    console.log("--------TAREFAS--------");
    todoTarefas.forEach((t, i) => {
        console.log(`${i + 1}. ${t.nome}`);
    });
    rl.question("Qual tarefa voce quer editar: ", (resposta) => {
        const opcEditar = Number(resposta);
        const idx = opcEditar - 1;
        if (opcEditar > todoTarefas.length || opcEditar <= 0) {
            console.log("Opção inválida");
            exibirMenu();
        }
        rl.question("Digite a alteração: ", (resposta2) => {
            if (!resposta2) {
                console.log("Tarefa Inválida");
                return exibirMenu();
            }
            else {
                todoTarefas[idx] = { nome: resposta2 };
            }
            console.log("Alteração feita com sucesso!");
            exibirMenu();
        });
    });
}
function excluir() {
    if (todoTarefas.length === 0) {
        exibirMenu();
    }
    console.log("--------TAREFAS--------");
    todoTarefas.forEach((t, i) => {
        console.log(`${i + 1}. ${t.nome}`);
    });
    rl.question("Qual tarefa vc quer excluir: ", (resposta) => {
        const opcExcluir = Number(resposta);
        const idx = opcExcluir - 1;
        if (opcExcluir <= 0 || opcExcluir > todoTarefas.length) {
            console.log("Inválido");
            return exibirMenu();
        }
        else {
            todoTarefas.splice(idx, 1);
        }
        console.log("Tarefa excluida com sucesso!");
        exibirMenu();
    });
}
exibirMenu();
