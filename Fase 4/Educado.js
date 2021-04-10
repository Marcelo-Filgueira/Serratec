/*
O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, 
uma saudação para você aparece na tela.
*/

const ler = require("prompt-sync")();

var  nome = ler ("Olá, qual seu nome? ");
var nick= ler("Prazer em te conhecer, " + nome + " , como você prefere ser chamado?");

console.log("A que legal, agora vou te chamar de ", nick);