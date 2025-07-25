let nomesParaFiltro: string[] = ['Bruno', 'Ana', 'José', 'Carla', 'Lu'];
let nomesFiltrados: string[] = [];

function filtrarNomes(nomeFiltro: string[]) {
    for (let i = 0; i < nomeFiltro.length; i++) {
        if (nomeFiltro[i].length <= 3){
            nomesFiltrados.push(nomeFiltro[i])
        }
        
    }

    return nomesFiltrados;
    
}



console.log(filtrarNomes(nomesParaFiltro));