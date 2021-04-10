/*
O programa “negativado” irá solicitar a digitação do valor da dívida, e oferecer um empréstimo no mesmo valor.
*/

const ler= require("prompt-sync")()

var divida = ler("Digite o valor da divida negativado: ")
divida = - 80;
emprestimo = Math.abs(divida)

console.log("Valor liberado para emprestimo: R$",emprestimo)