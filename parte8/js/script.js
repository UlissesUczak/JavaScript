//Hoisting - içamento - Todas as variaveis e funcoes são levadas ao topo antes do código ser interpretado.



console.log(sobrenome);

var nome = null;
var sobrenome;

console.log(nome);

nome = "Ulisses";

console.log(nome);
console.log(sobrenome);