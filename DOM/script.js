// Introdução ao Estudo de DOM

// Selecionar e Modificar Elementos

//getElementByid -> variável simples
let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerText = "Outro Título";//modificar o texto

// getElementsByClassName -> Vetor(array)
let descricao = document.getElementsByClassName("descricao")
console.log(descricao[0]);
descricao[1].innerText = "Outro Texto";
descricao[0].style.color = "red";

//getElementsByClassName -> Vetor (array)
let p = document.getElementsByTagName("p");
console.log(p[1]);
p[1].style.fontWeigth = "bold";

//querySelector -> variável simples
let paragrafo = document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontSize ="40px";

//querySelectorAll -> Vector(array)
let descricaoAll = document.querySelectorAll(".descricao")
descricaoAll.forEach(element => element.style.color="green");

// Lançamentos de Eventos (EventListener)

//1 - chamando direto no botão
function mudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

//2 - adicionando o ouvinte (addEventListener)
document.querySelector(".btn").addEventListener("click",outraCorFundo);

function outraCorFundo(){
    document.body.style.backgroundColor = "orange";
}