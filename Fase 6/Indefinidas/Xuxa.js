/*
No abecedário da Xuxa, vamos aprender!” Lembra da música? Então, 
crie um programa que recebe uma letra maiúscula e canta sua “definição musicaL
*/
const ler = require("prompt-sync")();

const XUXA = 10;
var xaxa = 1;
var baixinho;

while (xaxa< XUXA){

    console.log("A de amor, ")
    console.log("B de baixinho, ")
    console.log("C de coração, ")
    console.log("D de docinho, ")
    console.log("E de escola, ")
    console.log("F de feijão, ")
    console.log("G de gente, ")
    console.log("H de humano, ")
    console.log("I de igualdade, ")
    console.log("J, juventude, ")
    console.log("L, liberdade, ")
    console.log("M, molecagem, ")
    console.log("N, natureza, ")
    console.log("O, obrigado, ")
    console.log("P, proteção, ")
    console.log("Q de quero-quero, ")
    console.log("R de riacho, ")
    console.log("S, saudade, ")
    console.log("T de terra, ")
    console.log("U de universo, ")
    console.log("V de vitória, ")
    console.log("X, o que que é?, ")
    console.log("É Xuxa, ")
    console.log("E Z é zum-zum-zum-zum-zum, ")

    baixinho = ler("Para encerrar a repetição aperte 0? ");
    if (baixinho ==0){
        return console.log("O abecedário da Xuxa Vamos aprender, yeah, yeah, yeah")
    }

}
