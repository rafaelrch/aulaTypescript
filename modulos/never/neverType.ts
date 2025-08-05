function error(message: string): never {
    throw new Error(message);
}

console.log(error("Erro de mensagem - 01"));

// --------

function rejectMessage() {
    return error("Error de Mensagem - 02");
}

console.log(rejectMessage());

// --------

/* const loppInfinito = function loop() {
    while(true) {
        console.log("Oi developers")
    }
}

console.log(loppInfinito()) */

// -----------

/*const algumaCoisaVoid: void = null;

const algumaCoisaNever: never = null;

console.log(algumaCoisaVoid);
console.log(algumaCoisaNever);*/
