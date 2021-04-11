/*
No programa “Conto nos dedos”, a criança diz até qual número quer contar, 
e os números aparecem na tela em sequência. Ela vai experimentar vários números, 
 até que digite um zero para parar de contar.
 */

  const ler = require("prompt-sync")();

  var numero = ler("Digite o numero: ");
  
  for(let i = 0; i <= numero; i++){
      console.log(i);
  }