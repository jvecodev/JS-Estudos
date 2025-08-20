
//É uma função que lembra o escopo em que foi criada 
function lembrarSoma(x) {
  return function(y) {
    return x + y;
  }
}

let soma1 = lembrarSoma(2);

//eu passo o valor do parametro do retorno na variavel
//Como a variavel esta chamando a função, basicamente eu tenho dois argumentos
console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma2(7));
//Criamos bifurcações para reutilizar em outro lugar no código

function contador(i) {
  let cont = i;
  let somarContador = function() {
    console.log(cont);
    cont++;
  }
  return somarContador;
}

let meuContador = contador(5);
meuContador(10);
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(1);
meuContador2(1);
meuContador2(2);
meuContador2(3);