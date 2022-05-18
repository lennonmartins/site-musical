var totalCursos = document.querySelector(".js-total-de-cursos");
var totalHoras = document.querySelector(".js-total-de-horas");
var totalPreco = document.querySelector(".js-total-do-valor")
var selecionarTodos = document.querySelector(".js-selecionar-todos")

var botaoConfirmar = document.querySelector(".js-botao-confirmar");



var quantidadeCursos = 0;
var quantidadeHoras = 0;
var somaPreco = 0;

function adicionarCurso(checkbox) {
    if (checkbox.checked) {
        quantidadeCursos++;
        quantidadeHoras += parseInt(checkbox.value);
        somaPreco += parseFloat(checkbox.getAttribute('preco'));
    } else {
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
        somaPreco -= parseFloat(checkbox.getAttribute('preco'));
    }
    habilitarBotao();

    totalCursos.textContent = quantidadeCursos + " curso(s)";
    totalHoras.textContent = quantidadeHoras + "h";
    totalPreco.textContent = "R$ " + somaPreco;

}

function habilitarBotao() {
    if (quantidadeCursos > 0) {
        botaoConfirmar.classList.remove("disabled");
    } else {
        botaoConfirmar.classList.add("disabled");
    }

}

// function adicionarTodos() {
//     var condicaoVariavel = selecionarTodos.getAttribute("condicional");
//     if ( condicaoVariavel == "false") {
//         selecionarTodos.setAttribute("condicional", "true");   
//         condicaoVariavel = true;
//     } else {
//         selecionarTodos.setAttribute("condicional", "false");
//         condicaoVariavel = false;
//     }
    
//     var cursos = document.getElementsByName("curso");
//     for (let index = 0; index < cursos.length; index++) {
//                 cursos[index].checked = condicaoVariavel;    
//         adicionarCurso(cursos[index]);
//     }
// } para usar esta forma é preciso tirar o parametro this do "adicionartodos"

function adicionarTodos(checkbox) {
    var cursos = document.getElementsByName("curso");

    for (let index = 0; index < cursos.length; index++) {
        cursos[index].checked = checkbox.checked;
        adicionarCurso(cursos[index]);
    }
    
}