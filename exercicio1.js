/*
    Exercício 1
    Some os com valores maiores que 10 e menores que 30
*/
const lista = [10, 11, 15, 20, 30, 12, 9, 22, 44, 14, 25, 11, 4, 26, 17, 19, 41];
var soma = 0;

for (var indice of lista) {
   if (indice > 10 && indice < 30) {
       soma += indice;
   }
}
console.log(soma);