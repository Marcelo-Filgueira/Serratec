  
/**
 * 9.	No tablet da lanchonete, o cliente agora pode escolher três complementos. 
 * E os pedidos também ganharam mais opções!
Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O= ovo frito
 */

const ler = require("prompt-sync")();

var pedido1 = ler("Escolha um complemento: ");
var pedido2 = ler("Escolha outro complemento: ");
var pedido3 = ler("Escolha outro complemento: ");


if(((pedido1 ) == ("A" || "T" || "P" || "C" || "O")) || ((pedido2 ) == ("A" || "T" || "P" || "C" || "O")) || (pedido3) == ("A" || "T" || "P" || "C" || "O")){
    var molho = ler("Deseja adicionar um molho? ")
    
    if(molho == "sim"){
        console.log("Lanche com " + pedido1 + " e " + pedido2 + " e " + pedido3 + " com molho");
    }
    else{
      console.log("Lanche com " + pedido1 + " e " + pedido2 + " e " + pedido3 +  " sem molho");     
     }
}
else
  console.log("Lanche com " + pedido1 + " e " + pedido2 + " e " + pedido3);

