/*
No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, 
que armazena o valor e solicita a próxima carta. 
A vitória é do jogador quando a soma das cartas dá exatos vinte e um, 
ou ganha o carteador quando a soma ultrapassa esse valor.
 */

  const ler = require("prompt-sync")();

  var valor = 0;

  while(valor < 21){
    valor += Number(ler("Digite o valor da carta: "));
    
    if( valor == 21)
        console.log("Você ganhou");
    else if(valor > 21)
        console.log("Você perdeu.");
  }