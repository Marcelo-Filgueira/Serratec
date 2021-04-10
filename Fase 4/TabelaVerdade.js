/*//TabelaVerdade

//&& e anda

//Primeiro Valor | segundo Valor | Resultado Calculado

-----+-----+-----+
  P  |  Q  |  e
-----+-----+-----
true | true| true
true |false| false
false| true|false
false|false|false
-----+-----+-----  
*/
/*//Para que a expressão seja verdadeira, AMBOAS são verdade

OU || or
//Para que a expressão seja veradeira, QUALQUER um sendo verdade

-----+-----+-----+
  P  |  Q  |  e
-----+-----+-----
true | true| true
true |false| true
false| true|true
false|false|false
-----+-----+----- 
*/





/*var A, B;

//A = "Matheus está feliz";
A = "feliz";
//B = "Jessica está também feliz";
B = "feliz";

//AMBOS

var turma;

//Relacional
var af = A == "feliz"; //true
var bf = B == "feliz"; //false

console.log("a feliz?", af);
console.log("b feliz?", bf);

//&& "é o mesmo que "AMBOS, o da esquerda e o da direita, binário
turma = af && bf;
console.log("A turma toda está feliz?", turma);

//finge que Alice não tá feliz
A = "ta não";

af = A == "feliz";
bf = B == "feliz";
turma = af && bf;
console.log("A turma toda contando alice está feliz?", turma);
//Ambas as variáveis contém o valor true? não né, uma é falsa.
*/




/*var feliz;

//Saboreando

//André
feliz = true
console.log("valor na minha var feliz", feliz);

var resultado = !feliz
console.log("André, fala verdade", resultado);
*/




/*var A, B, C;

A = true
B = true
C = false

var resultado = (A && B) && C;
              = (true) &&
*/




var A, B;

A = "feliz";
B = "não";
C = "feliz";

var af = A == "feliz";
var bf = B == "feliz";
var cf = C == "feliz";

var resultado = af || bf || cf;
// || representa OU
console.log("Turma tá feliz?", resultado);