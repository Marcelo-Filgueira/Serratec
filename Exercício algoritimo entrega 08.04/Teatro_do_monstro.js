/*
Teatro_do_Monstro
// O teatro do monstro permite a entrada de até 5 pessoas;
// A peça só começa após atingir a lotação máxima;
// Nesta peça é proibida a entrada de menores de 16 anos;
// O gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.
*/

const ler = require("prompt-sync")();
var homens = 0;
var mulheres = 0;
var vagas = 0;

while(vagas < 5){
    var idade = ler("Qual a sua idade? ");
    var sexo = ler("Qual é o seu sexo? M ou F");

if(idade < 16){
    console.log("você não pode assistir a essa peça!");
    console.log("Proximo cliente!");
}
if(sexo == "M"){
    homens++;
    mulheres++;
    vagas++;
}

}
console.log("Nesta seção temos " + homens + " homens e" + mulhere + "mulhere");
console.log("O show vai comear agora!!");


