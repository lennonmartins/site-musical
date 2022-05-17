var titulo = document.querySelector('h1');
titulo.onmouseenter = esconderSubtitulo;
titulo.onmouseleave = aparecerSubtitulo;

function mostrarAlerta() {
    alert("Cliquei !");
}

function esconderSubtitulo() {
    var subtitulo = document.querySelector('h2');
    subtitulo.style.display = "none";
}


function aparecerSubtitulo() {
    var subtitulo = document.querySelector('h2');
    subtitulo.style.display = "block";
}

var porcentagem = document.querySelector('#porcentagem');
porcentagem.oninput = mostrarPorcentagem;
porcentagem.onfocus = mudarEstilo;
porcentagem.onblur = voltarEstilo;


function voltarEstilo() {
    porcentagem.style.height = '16px';
}

function mudarEstilo() {
    porcentagem.style.height = '100px';
}

function mostrarPorcentagem() {
    var valorPorcentagem = document.querySelector('#valorPorcentagem');
    var valorAtual = porcentagem.value;
    valorPorcentagem.textContent = porcentagem.value;
    var mensagem = document.querySelector('#mensagem');
    var advertencia = document.querySelector('#advertencia')
    if (valorAtual > 14) {
        mensagem.style.display = 'block';
    } else {
        mensagem.style.display = 'none';
    } {
        if (valorAtual > 18) {
            advertencia.style.display = 'block';
            mensagem.style.display = 'none'
        } else {
           
            advertencia.style.display = 'none';
        }
    }
}