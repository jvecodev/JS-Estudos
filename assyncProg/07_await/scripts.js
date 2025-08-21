function somaComDelay(a,b) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(a+b);
    }, 4000);
  })
}

async function resSoma(a,b,c) {

  let x = somaComDelay(a,b);
  let y = c;

  return await x + y;

}

resSoma(1,2,3).then(value => console.log(value));

// esse vem antges do acima, e vem no formato promise, vem unddefined porque não estamos esperando o resultado
console.log(resSoma(1,2,3));