const prompt = require("prompt-sync")();

//Entrada
const celsius = prompt("Digite os graus Celsius: ");

//Processamento
let fahr = celsius * 1.8 + 32;

//Saida
console.log("Fahrenheit: ", fahr);

//Outra leitura no mesmo programa
const c2 = prompt("Digite outro valor: ");

fahr = c2 * 1.8 + 32;
console.log("outro fah:", fahr);