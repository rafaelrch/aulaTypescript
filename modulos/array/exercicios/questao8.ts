let n: number[] = [3, 7, 10, 2];

function somarNumeros2(numero: number[]){
    let sum = 0;
    for (let i = 0; i < numero.length; i++) {
        sum += numero[i];
    }

    return sum;
}

console.log(somarNumeros2(n));