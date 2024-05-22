function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function() {
        tecla.classList.add('ativa');
    }
}
