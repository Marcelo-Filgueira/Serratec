/*
Indefinida: Repete pra sempre, enquanto a expressão é verdade

 Promoção da Radio 93:
 O locutor liga pra sua casa, você não dizer "Alô", diga "93 é Show"!
 */

 //Função de leitura classica e repetitiva

const ler = require("prompt-sync")();

//repita
let senhaCerta; 

do {
    let alo = ler("Ligando pra você: ");
    senhaCerta = alo == "93show";
} while (!senhaCerta);

console.log("Parabéns! ganhou camiseta!");

