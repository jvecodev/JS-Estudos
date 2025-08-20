let consoleTeste = () => {
  console.log("Olá mundo!");
};

consoleTeste();

// Uma arrow functions, devemos atrelar ela a uma variavel
// Basicamente ela não tem nome, oq tem nome é a variavel

let soma = (a,b) => {
  return a + b;
};

console.log(soma(10,20));

// aqui eu estou fazendo recursão com arrow function
let fatorial = (n) => {
  if (n === 0){
    return 1;

  }
  else{
    return n * (fatorial(n-1));
  }
};
