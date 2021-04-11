 /*9>Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.*/

  const ler = require("prompt-sync")();

  var n = ler ("Digite um numero: ")
  for(var i=0;i<10;i++){
      r=(i+1)*n;
      console.log(n,"x",i+1,"=",r)
  }