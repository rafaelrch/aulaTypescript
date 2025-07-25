// 01 Numerico ------------

enum Idioma {
    Portugues,
    Ingles,
    Espanhol,
    Italiano,
}

console.log(Idioma);

// 2 String --------

enum Dia {
    segunda = "SEG",
    terca = "TER",
    quarta = "QUA",
    quinta = "QUI",
    sexta = "SEX",
    sabado = "SAB",
    domingo = "DOM",
}

console.log(Dia.segunda);

// 3 -----------

const enum Comida{
    Hamburguer,
    Massa,
    Pizza,
    Torta,
    Churrasco,
}

function comida(c: Comida){
    return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));

// 4 --------

enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: "Parabes! Tarefa concluida com sucesso",
}

if (concluidaTarefa.status === Tarefa.Done){
    console.log("Email enviado")
}