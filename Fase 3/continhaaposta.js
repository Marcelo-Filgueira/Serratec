/*
A “continha oposta” lê um número e mostra seu valor negativo.
*/

const ler = require("prompt-sync")();

var  numero1= ler ("Digitite um número: ");
var resultado= - + numero1;

console.log("Seu número negativo é:", resultado);