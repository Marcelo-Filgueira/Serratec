const prompt = require("prompt-sync")();

var nota = prompt("Digite uma letra maiúscula de A a G");
var mensagem;
switch(nota){
    case "C": mensagem += "Do"; break;
    case "D": mensagem += "Re"; break;
    case "E": mensagem += "Mi"; break;
    case "F": mensagem += "Fa"; break;
    case "G": mensagem += "So"; break;
    case "A": mensagem += "La"; break;
    case "B": mensagem += "Si"; break;
}
console.log(mensagem);