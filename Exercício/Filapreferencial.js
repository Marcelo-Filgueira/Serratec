/**
 * Se for maior ou igual a 60 anos, gravida ou portador de necessidade especial
 */

  const ler = require("prompt-sync")();
  
  var idade = ler("Qual a sua idade? ");
  var gravida = ler("Você está gravida? ");
  var necessidade = ler("Você é portador de necessidade especial? ");

  if((idade > 60) || (gravida == "sim") || (necessidade == "sim"))
    console.log("Você pode utilizar a fila prioritária!");
  else
    console.log("Você terá que utilizar a fila normal.");