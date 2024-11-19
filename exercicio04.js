// 1. Declare uma variável x com o valor 100 no escopo global.
var x = 100;
// 2. Dentro de uma função chamada testScope, declare uma variável x com o valor 50 e imprima-a no console.
function testScope() {
    var x = 50;
    console.log("Valor de x dentro da função:", x);
// 3. Crie um bloco if dentro da função e declare uma variável x com o valor 30, e imprima-a no console.
if (true) {
    var x = 30;
    console.log("Valor de x dentro do bloco if:", x);
  }
}
// 4. Chame a função testScope e, em seguida, imprima o valor de x fora da função.
testScope();
console.log("Valor de x no escopo global:", x);