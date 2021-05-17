import {cursos } from './base_de_datos_curso.js';

var modelo_card_curso = document.querySelectorAll(".modelo_card_curso > #container")[0];
var container_cards = document.querySelectorAll("#container_cards > .row")[0];

for (var i=0;i < cursos.length;i++){
    var nueva_carta = modelo_card_curso.cloneNode(true);
    nueva_carta.classList.remove("d-none");
    
    nueva_carta.querySelector(".card > img").src = cursos[i].imagen_curso
    nueva_carta.querySelector(".card > .card-body > .card-title").innerHTML = cursos[i].titulo_curso
    nueva_carta.querySelector(".card > .card-body > .card-text").innerHTML = cursos[i].descripcion_curso
    nueva_carta.querySelector(".card > .card-body > .btn-danger").href = cursos[i].enlace_youtube
    nueva_carta.querySelector(".card > .card-body > .btn-warning").href = cursos[i].enlace_archivos

    container_cards.appendChild(nueva_carta);
}


console.log("return 0")