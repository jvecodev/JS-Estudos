let nome = "Matheus";

for(let i = 0; i < 10; i += 1) {

  if(i == 3) {
    nome = "João";
  }

  if(i == 5 && nome === "João") {
    console.log("O nome é João, pode parar");
    break;
    // Break serve para sair do loop
  }

  console.log(i);

}

