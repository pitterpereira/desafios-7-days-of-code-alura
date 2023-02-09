
let num1, num2, opcao, resultado;

opcao = Number(prompt("Digite qual operação deseja realizar: 1 - Adição / 2 - Subtração / 3 - Multiplicação / 4 - Divisão / 0 - Sair"));

if(opcao) {
    num1 = Number(prompt("Digite o primeiro número: "));
    num2 = Number(prompt("Digite o segundo número: "));

    switch(opcao){
        case 1:
            resultado = soma(num1, num2);
            break;
        case 2:
            resultado = subtrai(num1, num2);
            break;
        case 3:
            resultado = multiplica(num1, num2);
            break;
        case 4:
            resultado = divide(num1, num2);
            break;
    }

    alert(`O resultado é: ${resultado}`);
    
} else 
    alert(`Não haverá cálculo!`);


function soma(n1, n2) {
    return n1 + n2;
}
function subtrai(n1, n2) {
    return n1 - n2;
}
function multiplica(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    return n1 / n2;
}