const ler = require('prompt-sync')();

console.log("=== Leilaflix ===");

var flix = ler("Escolha seu gênero. Horror ou Drama? ");
var resultado;

if (flix == "Horror") {
    resultado = "Esses são os filmes de maior relevância do gênero Horror:";
    console.log(resultado);

        console.log("Train to Busan (96%): este filme venceu o prêmio Melhor filme de terror.");
        console.log("A Quiet Place (87%): este filme ganhou o prêmio de Critics' Choice Award.");
        console.log("His House (81%): este filme foi aclamado pela crítica.");
        console.log("The Witch (78%): este filme venceu o prêmio Melhor filme de terror.");
}

if (flix == "Drama"){
    resultado = "Esses são os filmes de maior relevância do gênero Drama:";
    console.log(resultado);

        console.log("The Boy Who Harnessed the Wind (95%): este filme venceu o prémio de Melhor Diretor em um Filme.");
        console.log("Room (91%): este filme venceu o Oscar de Melhor Atriz.");
        console.log("If Anything Happens I Love You (91%): este filme foi indicado ao Oscar.");
        console.log("Marriage Story (87%): este filme recebeu diversos prémios.");
        
}