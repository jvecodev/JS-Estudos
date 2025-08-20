let nome = "Matheus";

switch(nome) {
  case "Matheus":
    console.log("O Nome é Matheus");
    //  Se não tiver o break ele vai cair no outro switch
    //  O break serve para sair do switch
    break;
  case "João":
    console.log("O nome é João");
    break;
  default:
    console.log("O nome não foi encontrado");
    break;
}

// if(nome == "Matheus") {
//   console.log("O Nome é Matheus");
// } else {
//   console.log("O nome não foi encontrado");
// }