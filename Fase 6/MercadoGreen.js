/*
Funcionário vai entregar uma plaquinha de cartolina amarela para cada cliente que entrar no mercado para controlar o número de pessoas na loja.
*/
//Função de leitura classica e repetitiva

const ler = require("prompt-sync")();

const LIMITE = 3; 
var cliente;

var total = 1;
/*
cliente = ler("Qual final do CPF?");

while (total < LIMITE) {

total++;
cliente = ler("Qual final do CPF?");
console.log("Cliente na loja agora:", total);
}

console.log("Loja lotada");
*/

do {
cliente = ler("Qual final do CPF?");
total ++;
console.log("Clientes na loja:", total);
} while (total < LIMITE);

console.log("loja Lotada");