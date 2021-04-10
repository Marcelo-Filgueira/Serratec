/*
O programa “negativado” irá solicitar a digitação do valor da dívida, e oferecer um empréstimo no mesmo valor.

valor da divida: -80
valor liberado para empréstimo: R$ 80
*/
const ler = require("prompt-sync")();

//Entradas
let divida = ler("valor da divida: ");

//processamento
emprestimo = Math.abs(divida);

//Saidas
console.log("Valor liberado para empréstimo: R$ ", emprestimo);
