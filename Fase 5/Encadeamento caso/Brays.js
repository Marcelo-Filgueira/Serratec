 /*Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. 
 Do contrário, aproveita pra estudar. À tarde é ainda mais regrado: 
 para o almoço na praia, leva um lanche; em casa, feijoada. 
 Após almoçar, assiste televisão e tira um cochilo. 
 Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.
 */

  const ler = require("prompt-sync")();

  var sol = ler("Tem sol? s/n ");

  console.log("Manhã: ")
  if(sol=="s"){
    console.log("1) vai à praia");
  }
  else console.log("1) vai estutar")
  console.log("Tarde: ")
  if(sol=="s"){
    console.log("1) Para almoço na praia, leva um lanche");
  }
  else console.log("2) Em casa almoça feijoada");
  console.log("Após almoçar assiste tv e tira um cochilo");