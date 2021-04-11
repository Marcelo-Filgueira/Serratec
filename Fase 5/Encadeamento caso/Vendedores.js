/*Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.*/

const ler = require("prompt-sync")()

var venda = ler("Vendeu quanto? ")
var com0= venda*0.05;
if(venda>5000) {
    var com1= (venda-5000)*0.09;
    console.log("Sua comissão foi de",com1+com0);
}

else console.log("Sua comissão foi de",com0);