// Obtenha todas as divs com a classe "texto"
var divsTexto = document.querySelectorAll(".meu-nome");

// Para cada div com a classe "texto"
divsTexto.forEach(function(divTexto) {
    // Obtenha o texto da div
    var texto = divTexto.innerHTML;

    // Limpe o texto da div
    divTexto.innerHTML = "";

    // Defina uma variável para rastrear o índice do caractere atual que está sendo exibido
    var indice = 0;

    // Use o método setInterval() para adicionar um caractere por vez ao texto exibido na div
    setInterval(function() {
        divTexto.innerHTML += texto.charAt(indice);
        indice++;

        // Pare o setInterval() quando todos os caracteres tiverem sido exibidos
        if (indice == texto.length) {
            clearInterval();
        }
    }, 100);
});


const meuNome = document.querySelector('.meu-nome');
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
meuNome.innerHTML='';

function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisPROJETOS (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

maisPROJETOS (botaoVerMais);
