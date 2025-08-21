const reg = /\w+: (Matheus|João|Maria)/; // Nome: nadsuasudi

// Choice Pattern, verifica se tem o nome no texto passado
console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));