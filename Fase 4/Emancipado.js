/*
É considerado “Emancipado” qualquer pessoa a partir de 21 anos, 
ou o indivíduo do sexo masculino a partir dos 18 anos. Crie um programa para atestar a 
emancipação do cidadão segundo o ano do seu nascimento.
*/

const ler = require("prompt-sync")();

var sexo = ler("Qual o seu sexo ? ");
var AnoDeNascimento = ler("Qual o seu ano de nascimento ? ");
const anoAtual = 2021;
var idade = anoAtual - AnoDeNascimento ;

var emancipado = idade >= 21 && sexo === "Feminino" || idade >= 18 && sexo === "Masculino";

console.log("Sexo:", sexo);
console.log("Ano de nascimento:", AnoDeNascimento);
console.log("Cidadão Emancipado ?", emancipado);