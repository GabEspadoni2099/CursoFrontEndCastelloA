const prompt = require("prompt-sync")();


var idade = Number(prompt("Digite sua idade: "));
//condição

if(idade<18){
    console.log("Menor de idade");
} else if(idade<60) {
    console.log("Você é adulto");
} else{
    console.log("Você é Idoso");
}

