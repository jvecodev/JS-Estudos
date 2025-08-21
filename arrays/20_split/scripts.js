// com o split nos conseguimos transformar uma string em um array

let frase = "Testando o método split";

// Assim separa por letra
console.log(frase.split(""));

// Assim separa por palavra, ou seja o espaço define 
let palavras = frase.split(" ");

console.log(palavras);

let produtos = "Banana;Maçã;Jaca;Pera;Bola;Tapete";

console.log(produtos.split(';'));