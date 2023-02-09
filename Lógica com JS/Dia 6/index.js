
const frutas = ["maçã", "banana"], laticinios = ["leite", "queijo"], congelados = ["carne"], doces = ["brigadeiro", "cajuzinho"];

let continuar, deletar;

let item, categoria;

// Lógica
do {

    item = prompt(`Digite um item a ser inserido em sua lista de compras: `);

    categoria = Number(prompt(`Em qual categoria este item se enquadra? 0 - Frutas / 1 - Laticínios / 2 - Congelados / 3 - Doces`));

    // Insere o item no vetor correto de acordo com a categoria
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

    // Se desejar inserir mais um item, volta ao início. Se não...
    if(Number(prompt(`Deseja adicionar mais um item à sua lista de compras? 0 - Não / 1 - Sim`)))
        continue;
    // Se desejar remover algum item da lista...
    else if(Number(prompt(`Deseja remover algum item da sua lista de compras? 0 - Não / 1 - Sim`))) {

        do{
            // Pega o primeiro item da lista
            let categoria_delete = Number(prompt("Digite o número da categoria onde o item está: 0 - Frutas / 1 - Laticinios / 2 - Congelados / 3 - Doces"));

            // Verifica a categoria
            if(categoria_delete === 0 || categoria_delete === 1 || categoria_delete === 2 || categoria_delete === 3) {
                let item_delete = prompt("Digite o nome do item a ser deletado:");

                // Busca o item no vetor correto de acordo com a categoria e o exclui, se existir
                switch(categoria_delete){
                    case 0:
                        if(frutas.indexOf(item_delete))
                            frutas.splice(frutas.indexOf(item_delete), 1);
                        else
                            alert("Este item não existe!");
                        break;
                    case 1:
                        if(laticinios.indexOf(item_delete))
                            laticinios.splice(laticinios.indexOf(item_delete), 1);
                        else
                            alert("Este item não existe!");
                        break;
                    case 2:
                        if(congelados.indexOf(item_delete))
                            congelados.splice(congelados.indexOf(item_delete), 1);
                        else
                            alert("Este item não existe!");
                        break;
                    case 3:
                        if(doces.indexOf(item_delete))
                            doces.splice(doces.indexOf(item_delete), 1);
                        else
                            alert("Este item não existe!");
                        break;

                }
            }else{
                alert("Esta categoria não existe!")
                continue;
            }

        } while (Number(prompt(`Deseja remover mais algum item da sua lista de compras? 0 - Não / 1 - Sim`)));
        continuar = false;
    }

} while (continuar);

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





