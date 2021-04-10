/**
 * Reserva de hotel, nome e quantia
 */

  const ler = require("prompt-sync")();

  var nome = ler("Digite seu nome: ");
  var pagamento = ler("Quanto foi o quarto reservado? ");
  var quarto = ler("Qual o número do quarto reservado? ");

  console.log("A reserva feita pelo quarto " + quarto + ", feito por " + nome + ", foi de " 
  + pagamento + " reais"); 