/**
 * 16.	O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos 
 * sob o signo de Aquário são mais inteligentes que os demais.
 */

 const ler = require("prompt-sync")();

 
 var mes = ler("Qual o mês do seu aniversário? ");
 var dia = ler("Qual o dia do seu aniversário? ");

 var inteligente = (((mes == "1") && (dia >= "21")) || (mes == "2") && (dia <= 19))

 console.log("Você é inteligente? " + inteligente);