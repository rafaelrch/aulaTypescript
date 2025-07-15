let numerosParaSomar: number[] = [10, 20, 30, 40, 50];

function somarNumeros(numero: number[]){
    let soma = 0;
    for (let i = 0; i < numero.length; i++) {
        soma += numero[i];
    }

    return soma;
}

let resultado = somarNumeros(numerosParaSomar);
console.log(resultado);
