/*
Exercício despertador

Criar uma função que recebe um número, e retorna se ele é negativo, positivo, ou zero.
*/


function numeros (numero) {
    let positivo = numero > 0;
    let negativo = numero <0;

    if (positivo) return "Positivo";
    if (negativo) return "Negativo";
    return "Zero";
}

console.log(11, numeros(11));
console.log(-5, numeros(-5));
console.log(0, numeros(0));


