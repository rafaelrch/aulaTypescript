"use strict";
let nomesParaFiltro = ['Bruno', 'Ana', 'José', 'Carla', 'Lu'];
let nomesFiltrados = [];
function filtrarNomes(nomeFiltro) {
    for (let i = 0; i < nomeFiltro.length; i++) {
        if (nomeFiltro[i].length <= 3) {
            nomesFiltrados.push(nomeFiltro[i]);
        }
    }
    return nomesFiltrados;
}
console.log(filtrarNomes(nomesParaFiltro));
