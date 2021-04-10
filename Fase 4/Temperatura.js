/*
Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara.
Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
*/

const ler = require("prompt-sync")();

var mascara = ler ("Está de máscara?");
var temperatura = ler("Preciso verificar a sua temparatura = ");
var autorizacao = mascara === "sim" && temperatura <= 37.5;

console.log("Autorizar a entrada?", autorizacao);