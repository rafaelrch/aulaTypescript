// 1 - Functions (named function)

function somarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

const resultado2 = somarNumeros(2, 2);
console.log(resultado2);

// 2 - Funcao anonima (function expression)

const saudar = function (mensagem: string) {
    return mensagem
};

console.log(saudar('Olá, developers!'));


// 3 - (Arrow Function Expression)

const saudar02 = (mensagem: string) => {
    return mensagem
}

console.log(saudar02('Fala pessoal!'));


// 4 - (Function constructor)

const saudar03 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(saudar03("familia"))
