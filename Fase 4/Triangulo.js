/*
O programa “Três ângulos” lê os valores dos ângulos de uma forma, 
e escreve se as medidas formam um triângulo válido.
*/

const ler = require("prompt-sync")();
  var lado1 = ler("Digite o primeiro lado do triangulo: ");
  var lado2 = ler("Digite o segundo lado do triangulo: ");
  var lado3 = ler("Digite o terceiro lado do triangulo: ");

  lado1 = Number(lado1);
  lado2 = Number(lado2);
  lado3 = Number(lado3);

  var verdade = ((lado1 < 180) && (lado2 < 180) && (lado3 < 180) && ((lado1 + lado2 + lado3) == 180));

  console.log("O tringulo é valido? " + verdade);
