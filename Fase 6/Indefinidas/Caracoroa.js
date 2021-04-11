/*
O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda 
até que ela caia do jeito que você queria! Cada jogada será exibida no console.
 */
  
  function caraOuCoroa (){
  
    var aleatorio = Math.trunc(Math.random() * 10);

    if( aleatorio == 0){
      aleatorio = "cara";
      console.log(aleatorio);
    }
     else if(aleatorio % 2 == 0){
      aleatorio = "cara";
      console.log(aleatorio);
    }
    else if(aleatorio % 2 == 1){
      aleatorio = "coroa";
      console.log(aleatorio);
    }
    return aleatorio;
  }
  
  
  const ler = require("prompt-sync")();

  var escolha = ler("Escolha cara ou coroa: ");

  var aleatorio = caraOuCoroa();
  

  while(escolha != aleatorio){
    aleatorio = caraOuCoroa();
  }