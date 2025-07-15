let num1: number = 23.0;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Ponto flutuante: ', num1);
console.log('Hexadecimal: ', num2);
console.log('Octal: ', num3);
console.log('Binario: ', num4);

// -------------

let big1: bigint = 4713984791387498132787139857193n;
let big2: bigint = 0b100000000000000000000011n;
let big3: bigint = 0x200000000000000000n;
let big4: bigint = 0o40000000000000003n;

console.log('Bigint: ', big1);
console.log('Bigint-Binario: ', big2);
console.log('Bigint-Hexadecimal: ', big3);
console.log('Bigint-Octal: ', big4);

