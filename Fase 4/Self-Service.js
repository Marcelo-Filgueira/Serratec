
 const ler = require("prompt-sync")();   
 
 var tara = 465;   
 var peso = ler("Digite o preço do quilo: ");   
 var gramas = ler("Digite as gramas da refeição: ");   
 gramas=gramas;  
 valor = gramas*peso/1000;    
 console.log("Restaurante HotPepper, tara",tara,"g, 100g",peso/10,"R$, valor total",valor);