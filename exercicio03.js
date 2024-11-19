//1. Crie uma variável phrase com o valor "JavaScript is fun!"
var phrase = "JavaScript is fun!";
var counter = 0;
//2. Use um loop for para imprimir cada caractere de phrase individualmente no console
for (var i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
//3. Crie uma variável counter para contar quantas vezes a letra 'a' aparece em phrase e imprima esse valor ao final do loop
  if (phrase[i].toLowerCase() === 'a') {
    counter++;
  }
}
console.log("Ocorrências da letra 'a':", counter);
// Utilize um loop while que imprime números de 1 a 10 no console
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}