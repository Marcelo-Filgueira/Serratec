/*
var calculo; //string
var A, B; //Integer

calculo = "A = 9 * 7;";
console.log("Expressão", calculo);
A = 9 * 7;
console.log("resultado A", A);

calculo = "B = A + 3;";
console.log("novo valor do calculo", calculo);
B = A + 3;
console.log("resultado B", B);
*/


//Cópia de conteúdo de uma memória pra outra
var A, B;

A = 5;
//Copiando conteúdo de A para B
B = A;
console.log("A", A, "B", B);

A = 8;
B = A;
B = B + A + 1;
console.log("A", A, "B", B);

var quarenta;
quarenta = 35 * (40 / 100);
console.log("quarenta da turma é", quarenta);

quarenta = 35 * 0.4;
console.log("quarenta decimal", quarenta);

var cortar;
cortar = 12.345;

var resultado;
resultado = Math.trunc(12.345);
console.log("resultado = Math.trunc(12.345);");
console.log("resultado", resultado);

resultado = Math.round(12.945);
console.log("resultado = Math.round(12.345);");
console.log("resultado", resultado);

//lá dentro da função, alguém alguma hora vai atribuir na minha variável
//atribuição convencional/classica
//identificador := valor

//Atribuição implícita
LeiaUmNumero(resultado);
