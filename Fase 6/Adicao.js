 var texto = "hello";
 texto = texto + " " + "world";
 console.log(texto);
 
 var numero = 2;
 numero = numero + 2;
 console.log(numero);

 numero += 5;
 console.log(numero);

 texto += " bom dia";
 console.log(texto);

 //Sintaxe
 var y = 1;
 var x = 0; 
 x += y
//significa
  x = x + y

  console.log("antes", x);
  //Incremento
  x = x + 1
  x++;

  x += 1;

  console.log("depois", x);

  var retorno = x++;
  console.log("x", x, "retorno", retorno);

  //inverso
  retorno = ++x;
  console.log("novo x", x, "retorno", retorno);

  //Decremento
  //subtrair 1 unzinho

  x--;
  console.log("menos", x);
  console.log("aqui dentro do console", --x);
  console.log("cuidado, aqui voce verá o valor anterior de x", x--);
  console.log(x); 