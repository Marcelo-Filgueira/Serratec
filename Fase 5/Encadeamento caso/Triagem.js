/*
A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o  “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.
  */

  const ler = require("prompt-sync")();

  var nome = ler("Digite o nome do paciente: ")
  var vacinado = ler("Foi facinado? sim/nao: ")
  var r = vacinado!= "sim"
  console.log("Paciente: ",nome);
  console.log("Já vacinado?", vacinado);
  console.log("[Triagem]")
  console.log("Sujeito a infecção? ", r);