
let nome, idade, linguagem, resposta; 

const pergunta = new Promise((resolve, reject) => {
    nome = prompt("Qual o seu nome?");

    if(nome)
       return resolve(console.log("Nome coletado!"));

}).then(() => {
    idade = prompt("Quantos anos você tem?");

    if(idade)
        return console.log("Idade coletada!");

}).then(() => {
    linguagem = prompt("Qual linguagem de programação você está estudando?");

    if(linguagem)
        return console.log("Linguagem coletada!");

}).then(() => {
    resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 0 para NÃO`);

    if(resposta)
        return console.log("Resposta coletada!");

}).finally(() => {
    document.querySelector("#p1").textContent = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`

    if(parseInt(resposta)) // 1 = true, 0 = false
        document.querySelector("#p2").textContent = `Muito bom! Continue estudando e você terá muito sucesso!`
    else
        document.querySelector("#p2").textContent = `Já que não gosta de ${linguagem}, já tentou aprender outras?`

});

