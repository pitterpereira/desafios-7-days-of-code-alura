
const frutas = ["maçã", "banana"], laticinios = ["leite", "queijo"], congelados = ["carne"], doces = ["brigadeiro", "cajuzinho"];

let continuar, deletar;

let item, categoria;

// Lógica
do {

    item = prompt(`Digite um item a ser inserido em sua lista de compras: `);

    categoria = Number(prompt(`Em qual categoria este item se enquadra? 0 - Frutas / 1 - Laticínios / 2 - Congelados / 3 - Doces`));

    switch(categoria) {

        case 0:
            frutas.push(item);
            break;
        case 1: 
            laticinios.push(item);
            break;
        case 2: 
            congelados.push(item);
            break;
        case 3: 
            doces.push(item);
            break;
        default:
            alert("Não foi inserido um valor válido");
    };

    if(Number(prompt(`Deseja adicionar mais um item à sua lista de compras? 0 - Não / 1 - Sim`)))
        continue;
    else if(Number(prompt(`Deseja remover algum item da sua lista de compras? 0 - Não / 1 - Sim`))) {
        do{

            // A lógica do programa está incompleta


            let categoria_delete = prompt("Digite o nome da categoria onde o item está:");

            categoria_delete === "frutas" ? 


        } while (Number(prompt(`Deseja remover algum item da sua lista de compras? 0 - Não / 1 - Sim`));
    }

} while (adicionar);

function printar_listas(nome_lista, vetor_lista) {

    let item;
    let ul = document.getElementById(nome_lista);

    for(let i=0; i<vetor_lista.length; i++){
        item = document.createElement("li");
        item.innerHTML = vetor_lista[i];
        ul.appendChild(item);
    }
}

printar_listas("frutas", frutas);
printar_listas("laticionios", laticinios);
printar_listas("congelados", congelados);
printar_listas("doces", doces);





