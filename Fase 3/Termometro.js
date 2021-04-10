/*
O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit
*/

const ler = require("prompt-sync")();

    var nome = ler("Olá, qual seu nome?")
    var celsius = ler ("Prazer "+ nome + ", meu nome é Marcelo, digite o valor da temperatura em celsius: ");
    var fahrenheit= (celsius * 10/3) + 26;
    
    console.log(nome, "a temperatura em fahrenheit é:", fahrenheit);