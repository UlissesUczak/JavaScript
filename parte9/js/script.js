var obj = {
 nome: "Ulisses",
 idade: 29,
 profissao: "programador",
 estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log(`o meu nome é ${obj.nome}, eu tenho ${obj.idade} anos e sou ${obj.profissao}`)

obj.nome = "Rodrigo";

console.log(obj.nome);

console.log(obj)
//incluindo no objeto (linha abaixo)
obj.graduacao = true;

console.log(obj);