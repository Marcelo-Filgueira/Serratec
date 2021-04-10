/*
Indefinida: repete pra sempre, enquanto a expressão é verdade

Promoção da Radio 93:
os primeiros 5 ouvintes que ligarem ganham um boné e camiseta da rádio.
*/

//Função de leitura classica e repetitiva
const ler = require("prompt-sync")();

var primeiros = 0;

while (primeiros < 5) {
    let nome = ler ("Ouvinte: ");
    console.log("Parabéns ", nome, "!Você ganhou um boné.");

    //indefinida === pra sempre === eterna === infinita
    //Atenção, você como dev dar um fim, um término.
    primeiros ++;
}

console.log("[Leifert] Votação encerrada!");
