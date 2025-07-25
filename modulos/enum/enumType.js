"use strict";
// 01 Numerico ------------
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Italiano"] = 3] = "Italiano";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// 2 String --------
var Dia;
(function (Dia) {
    Dia["segunda"] = "SEG";
    Dia["terca"] = "TER";
    Dia["quarta"] = "QUA";
    Dia["quinta"] = "QUI";
    Dia["sexta"] = "SEX";
    Dia["sabado"] = "SAB";
    Dia["domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia.segunda);
function comida(c) {
    return 'Comidas muito apetitosas!';
}
console.log(comida(2 /* Comida.Pizza */));
// 4 --------
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: "Parabes! Tarefa concluida com sucesso",
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log("Email enviado");
}
