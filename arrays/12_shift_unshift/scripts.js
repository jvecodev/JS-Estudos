let carros = ["BMW", "Audi", "VW", "Fiat"];

// Remove o primeiro elemento do array
let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

// Adiciona o elemento no inicio do array
carros.unshift('Gurgel');

console.log(carros);
console.log(carros[0]);