
const areas = ["Front-End", "Back-End"];
const techs_front = ["React", "Vue"];
const techs_back = ["C#", "Java"];
const futuro = ["Especialização", "Fullstack"];


// Área desejada
const area = Number(prompt("Qual área você gostaria de seguir? 1 - Front-End / 2 - Back-End"));

// Tecnologia desejada
let tech = 0;

area == 1 ? tech = Number(prompt("Você quer aprender React ou Vue? 1 - React / 2 - Vue"))
    : area == 2 ? tech = Number(prompt("Você quer aprender C# ou Java? 1 - C# / "))
        : alert("Você não inseriu uma área válida!");

// Carreira
let opcao_futuro = Number(prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack"));

opcao_futuro == 1 ? tech = alert(`Continue se especializando em ${techs_front[opcao_futuro-1]} para dominar a área de ${areas[area-1]}!`)
    : opcao_futuro == 2 ? tech = alert(`Chegou a hora de começar a aprender outras linguagens além de ${areas[--area]} se você quer se tornar Fullstack!`)
        : alert("Você não inseriu um valor válido!");

let interesse = Number(prompt("Tem mais alguma tecnologia que você se interessa? 1 - Sim / 0 - Não"));

while (interesse){
    let novaTecnologia = prompt("Qual tecnologia você tem curiosidade de aprender?");

    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);

    interesse = Number(prompt("Tem mais alguma tecnologia que você se interessa? 1 - Sim / 0 - Não"))
}