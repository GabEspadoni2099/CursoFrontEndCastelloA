//Funções de Texto (String)

let texto = "Aula de JavaScript"

//contar os caractéres (length)
console.log(texto.length); //18

//MAIÚSCULAS e minúsculas
console.log(texto.toUpperCase()); //MAIÚSCULAS
console.log(texto.toLowerCase()); //minúsculas

// Partes do Texto
//subString
console.log(texto.substring(0,4)); //Aula
//slice(Quantidade)
console.log(texto.slice(-10)); //JavaScript

//Substituir parte do texto
console.log(texto.replace("Java", "Type"))

//Tesoura (Trim)
let texto1 = "  JavaScript  ";
console.log(texto1); //"  JavaScript  "
console.log(texto1.trim());

//Separar Texto (split) - Caracter Comum
let linguagens = "JavaScript, Python, PHP, Java, C#";
let vetorlinguagens = linguagem.split("");
console.log(linguagens);
console.log(vetorlinguagens);

//desafio
let caracter = "Bom Dia Com Muita Alegria";

let caracterSemEspaco = caracter.replaceAll(" ","");
console.log(caracter);
console.log(caracter.length);
console.log(caracterSemEspaco);
console.log(caracterSemEspaco.length);