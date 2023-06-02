let baseClassificacao = document.querySelector("section#classificacao");
let playerClassificacao = document.querySelector("section#classGeral");
let btnDeck = document.querySelector("input#classDeck");
let btnPlayer = document.querySelector("input#classPlayer");

function rankDeck() {
    baseClassificacao.style.display = "block";
    playerClassificacao.style.display = "none";

    btnDeck.style.backgroundColor = "#3b0a04";
    btnDeck.style.color = "white";
    btnPlayer.style.backgroundColor = "white";
    btnPlayer.style.color = "#3b0a04";
}

function rankPlayer() {
    playerClassificacao.style.display = "block";
    baseClassificacao.style.display = "none";

    btnPlayer.style.backgroundColor = "#3b0a04";
    btnPlayer.style.color = "white";
    btnDeck.style.backgroundColor = "white";
    btnDeck.style.color = "#3b0a04";
}