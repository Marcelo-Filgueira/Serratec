/*
Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10
*/

const ler = require("prompt-sync")();

nota = ler("  Digite a sua nota");

if (nota >=8 && nota <= 10){

    console.log("Destaque");

}

if (nota >=6 && nota <= 7.99){

    console.log(" Aprovado!");
}

if (nota >= 5 && nota <= 5.99){

    console.log(" Recueração");

}

else if (nota >= 0 && nota <= 4.99){
    
    console.log("Reprovado");
}
