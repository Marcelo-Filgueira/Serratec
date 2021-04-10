/*
Indefinida: repete pra sempre, enquanto a expressão é verdade

Promoção da Radio 93:
os primeiros 5 ouvintes que ligarem ganham um boné e camiseta da rádio.
*/

//Função de leitura classica e repetitiva
const ler = require("prompt-sync")();

//Sintaxe
//para (inicio; condição; incremento) instrução;

//Variável de controle
//controla a repetição definida
//;finalidade == inicio e fim das iterações

for (var i = 1; i <= 10; i++) {
    let nome = ler("Ouvinte: ");
    console.log("Parabéns ", nome, " ganhou paçoca!");
}

console.log("Promoção encerrada");