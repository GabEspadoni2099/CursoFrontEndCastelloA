const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade >= 18 && idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

rl.question('Digite sua idade: ', (idade) => {
    const classificacao = verificarIdade(parseInt(idade));
    console.log(`Você é: ${classificacao}`);
    rl.close();
});
