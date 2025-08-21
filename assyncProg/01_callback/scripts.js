console.log("1");

setTimeout(function() {
  console.log("5");
}, 2000);

// esses consoles viram antes do setTimeout
// Por isso setTimeOut é considerado um prog assync
console.log("2");
console.log("3");
console.log("4");