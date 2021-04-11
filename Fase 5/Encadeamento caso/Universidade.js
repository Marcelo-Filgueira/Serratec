/*
Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. 
Para os pagamentos recebidos entre os dias 10 a 13, 
será concedido um desconto na próxima mensalidade. 
O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
*/

  
  const ler = require("prompt-sync")();

  var num = ler("Número do boleto: ");
  var dia = ler("Dia do pagamento: ");
  var r = dia<= 13;
  console.log("[Extrato]");
  console.log("Número do boleto: ",num);
  console.log("Dia do pagamento: ", dia);
  console.log("Desconto na próxima mensalidade? ", r);