/*
 Na "Estatística IBGE - Serra" o Serratec gostaria de saber o total de homens e mulheres na turma.
 */

 const prompt = require("prompt-sync")();

 //processamento
 var m = 0;
 var f = 0;
/*
 repetição nro de alunos: 
 Sim, eu sei == definida
 nao sei == indefinida
 estabelecer uma forma de parar

 for (inicializacao; condicao verdade; incremento)
 */
/*
for (var i = 0; i < 35; i++) {
 var aluno = prompt("Aluno, digite M ou F: ");

 if (aluno == "F") f++;
 if (aluno == "M") m++;
}
*/
var qtde = prompt("Quantos alunos temos na turma? ");
qtde = Number(qtde);
var i = 0;

    var aluno;
    console.log("Digite 0 para terminar. ");

    while (aluno != "0"){
        aluno = prompt("Aluno, digite M ou F: ");
    if (aluno == "F") f++;
    if (aluno == "M") m++;
  }

 //Saída
 console.log("total de homens: ", m);
 console.log("total de mulheres: ", f);
 