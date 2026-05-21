// Rhuan Marques Duarte Barbosa

//criando um array
let frutas = ["maça", "banana", laranja];
let frutas = ["maça", "banana", "laranja"];

console.log(frutas); //Output: {"maça", "banana", "laranja"}

//Criando array de numeros
let numeros = [1,2,3,4,5]

console.log(numeros[0]); //Output: [1,2,3,4,5]

//Acessando elementos de array
let carros = ["Fusca", "Gol", "Palio"];

console.log(carros[0]);// Output: "Fusca"
console.log(carros[1]); // Output: "Gol"

//Alterando elementos do array
let cores = ["vermelho", "verde", "azul"];

cores[1] = "amarelo";
console.log(cores); //Output: ["vermelho", "amarelo", "azul"]

//descobrindo o tamanho da array
let animais = [" cachorro", "gato", "coelho", "hamster", "papagaio", "peixe", "tartaruga", "cobra", "leão", "tigre"];
console.log(animais.length); //Outuput: 10

//Removendo o último elemento do array com pop()
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
cidades.pop()
console.log(cidades); //Output:["São Paulo, "Rio de Janeiro"]

//Adicionando elementos ao início do array com unshift()
let coresPrimarias = ["Vermelho", "Verde"];
coresPrimarias.unshift("Azul");
console.log(coresPrimarias); //Output: ["Azul", "Vermelho", "Verde"];

//Removendo o primeiro elemento do array com shift()
let frutasCitricas = ["Limão", "Laranja", "Tangerina"];
frutasCitricas.shift();
console.log(frutasCitricas); // Output:["Laranja", "Tangerina"];