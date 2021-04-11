
const ler = require("prompt-sync")();

var nome = ler("Digite seu nome ?")
console.log("--Seja Muito Bem vindo", nome, "--");
console.log("=============================================");

var fruta =ler("Digite o nome fruta ?").toLowerCase();

switch (fruta) {
    case ("maçã"):
            console.log("1 - É boa para o coração");
            console.log("2 - Ajuda na digestão");
            console.log("3 - Afasta a prisão de ventre");
            console.log("4 - Bom contra diarria");
            console.log("5 - Previne cáries");
            console.log("6 - Previne o câncer");
        break;
    case ("Pera"):
            console.log("1 - Ajuda no funcionamento do intestino");
            console.log("2 - Faz bem para o coração");
            console.log("3 - Combate inflamação");
            console.log("4 - Melhora o controle glicêmico");
            console.log("5 - Aumenta a saciedade");
            console.log("6 - faz bem para os ossos");
        break;
    case ("banana"):
            console.log("1 - Recuperação muscular");
            console.log("2 - Melhora no humor");
            console.log("3 - Ajuda a emagrecer");
            console.log("4 - Equilíbrio da glicose no sangue");
            console.log("5 - Aumento da saúde do sistema digestório.");
            console.log("6 - Disposição física e mental");
        break;
    case ("abacate"):
            console.log("1 - Afasta o colesterol");
            console.log("2 - Faz bem para o coração");
            console.log("3 - Diminui o cortisol, hormônio do estresse");
            console.log("4 - Fortalece o organismo após os exercícios");
            console.log("5 - Ajuda a perder peso");
            console.log("6 - Faz bem para os olhos");
        break;
    default:
        console.log("Fruta não citada")
        break;
}