/*
/1- mostre 3 destinos para o cliente
2- deixe o cliente escolher um dos lugares
3- apresente o (ou os) pacotes para a escolha do cliente
4- depois que ele escolher // boa viagem (se quiser incremente mais como dito acima)/
*/


  const ler = require("prompt-sync")();

  console.log("Escolha um dos lugares");
  console.log("1) ISS\n2) Reykjavík \n3) Valhalla");
  var escolha = ler("Digite opção 1, 2 ou 3->  ")

  if(escolha=="1"){
      console.log("\n\nUma viagem somente para pioneiros, aproveite pois a NASA permite somente 2 viagens por ano!")
      console.log("Para ISS só temos um pacote por enquanto:\n1) Cada noite U$$ 35mil\n")
      escolha = ler ('Digite o número do pacote->  ');
      if(escolha=="1") console.log("Boa viagem e aproveite para tirar muitas selfies! ");
  }
  if(escolha=="2"){
      console.log("Se você ama paisagens nórdicas incrivéis essa será a sua viagem perfeita!")
      console.log("\n\nVEJA NOSSOS PACOTES")
      console.log("1) 7 noites por U$$ 5.354\n2) 3 noites por U$$3.270\n ")
      escolha = ler ('Digite o número do pacote->  ');
      if(escolha=="1") console.log("Boa viagem e aproveite suas 7 noites em Reykjavík! ");
      if(escolha=="2") console.log("Boa viagem e aproveite suas 3 noites em Reykjavík! ");
  }
  if(escolha=="3"){
    console.log("Somente para os mais fanáticos pela cultura nordica, e não é mais preciso morrer para chegar lá! Aproveite!.")
    console.log("\n\n NOSSOS PACOTES")
    console.log("1) A vida inteira por apenas 1 das joias do infinito\n2) 3 noites por 100mil bitcoins!\n3) 37 reais para infinitas horas pela steam!\n")
    escolha = ler ('Digite o número do pacote->  ');
    if(escolha=="1") console.log("Boa viagem e aproveite o resto de sua vida em Valheim! ");
    if(escolha=="2") console.log("Boa viagem e aproveite suas 3 noites em Valheim! ");
    if(escolha=="2") console.log("Boa viagem e imersão nesse maravilhoso game! ");
  }