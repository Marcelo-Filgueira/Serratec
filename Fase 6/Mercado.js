/*
Funcionário vai entregar uma plaquinha de cartolina amarela para cada cliente que entrar no mercado para controlar o número de pessoas na loja.
*/

//Função de leitura classica e repetitiva
const ler = require("prompt-sync")();
//sempre que for maiúscula é constante.
const LIMITE = 3;
var total = 0;

var cliente = ler("Qual final do CPF?");
if(total < LIMITE) total += 1;
else console.log("crowded");
console.log("Clientes na loja agora:", total);

var cliente = ler ("Qual o final do CPF?");
if (total < LIMITE) total ++;
else console.log ("Clientes na loja agora: ", total);
console.log("Qual final do CPF?", total);

var cliente = ler ("Qual final do seu cpf? ");
if (total < LIMITE) ++total;
else console.log("A Loja está lotada");
console.log("Clientes na loja agora:", total);

var cliente = ler ("Qual final do seu cpf? ");
if (total < LIMITE) ++total;
else console.log("A Loja está lotada");
console.log("Clientes na loja agora:", total);


