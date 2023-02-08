
// Gera o número aleatório entre 0 e 10
// Math.floor(Math.random() * (max - min + 1) + min)
const numero_secreto = Math.floor(Math.random() * (10 - 1 + 1) + 1);

let resposta = 0;

let tentativas = 3;

alert(`Um número secreto entre 1 e 10 foi gerado!`);

do {
    alert(`Você tem ${tentativas} tentativas para acertar o número secreto!`);
    resposta = prompt(`Digite um número de 1 a 10: `);

    if(resposta === numero_secreto)
        break;
    else {
        alert(`O número secreto não é ${resposta}!`)
        --tentativas;
    }
} while(tentativas);

if(tentativas)
    alert(`Você acertou o número!`);
else
    alert(`Você gastou todas as suas tentativas e não acertou. O número era ${numero_secreto}`);