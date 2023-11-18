//Função para mudar o tipo de menu exibido quando a pagina tiver tamanhos diferentes
function screenChange() {
    let menuArea = document.querySelector("nav#menuArea");

    if (window.innerWidth >= 768) {
        menuArea.style.display = "flex";
    } else {
        menuArea.style.display = "none";
    }
}

//Função para abrir e fechar o menu no mobile
function menuClick() {
    let menuArea = document.querySelector("nav#menuArea");

    if (menuArea.style.display == "flex") {
        menuArea.style.display = "none";
    } else {
        menuArea.style.display = "flex";
    }
}

//Função para quando mudar a opção no select, abrir na tela os dados dos decks referentes ao nome
function changePlayer() {
    let currentPosition = document.querySelector("select#playerMobile");

    let jaoDecks = document.querySelector("div#jao-decks");
    let tilaDecks = document.querySelector("div#tila-decks");
    let robDecks = document.querySelector("div#rob-decks");
    let viDecks = document.querySelector("div#vi-decks");
    let fahDecks = document.querySelector("div#fah-decks");
    let fehDecks = document.querySelector("div#feh-decks");

    if (currentPosition.value === "jao") {
        jaoDecks.style.display = "flex";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";

        jaoDeckList.style.display = "none";
        tilaDeckList.style.display = "none";
        robDeckList.style.display = "none";
        viDeckList.style.display = "none";
        fahDeckList.style.display = "none";
        fehDeckList.style.display = "none";
    } else if (currentPosition.value === "tila") {
        tilaDecks.style.display = "flex";
        jaoDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";

        jaoDeckList.style.display = "none";
        tilaDeckList.style.display = "none";
        robDeckList.style.display = "none";
        viDeckList.style.display = "none";
        fahDeckList.style.display = "none";
        fehDeckList.style.display = "none";
    } else if (currentPosition.value === "rob") {
        robDecks.style.display = "flex";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";

        jaoDeckList.style.display = "none";
        tilaDeckList.style.display = "none";
        robDeckList.style.display = "none";
        viDeckList.style.display = "none";
        fahDeckList.style.display = "none";
        fehDeckList.style.display = "none";
    } else if (currentPosition.value === "vi") {
        viDecks.style.display = "flex";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";

        jaoDeckList.style.display = "none";
        tilaDeckList.style.display = "none";
        robDeckList.style.display = "none";
        viDeckList.style.display = "none";
        fahDeckList.style.display = "none";
        fehDeckList.style.display = "none";
    } else if (currentPosition.value === "fah") {
        fahDecks.style.display = "flex";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fehDecks.style.display = "none";

        jaoDeckList.style.display = "none";
        tilaDeckList.style.display = "none";
        robDeckList.style.display = "none";
        viDeckList.style.display = "none";
        fahDeckList.style.display = "none";
        fehDeckList.style.display = "none";
    } else if (currentPosition.value === "feh") {
        fehDecks.style.display = "flex";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";

        jaoDeckList.style.display = "none";
        tilaDeckList.style.display = "none";
        robDeckList.style.display = "none";
        viDeckList.style.display = "none";
        fahDeckList.style.display = "none";
        fehDeckList.style.display = "none";
    }
}
//Area de cliques nas imagens para abrir os arquivos
//jao
let jaoDeckList = document.querySelector("article#player1");
let jao_deck1 = document.querySelector("section#jao-deck1");
let jao_deck2 = document.querySelector("section#jao-deck2");
//tila
let tilaDeckList = document.querySelector("article#player2");
let tila_deck1 = document.querySelector("section#tila-deck1");
let tila_deck2 = document.querySelector("section#tila-deck2");
//rob
let robDeckList = document.querySelector("article#player3");
let rob_deck1 = document.querySelector("section#rob-deck1");
let rob_deck2 = document.querySelector("section#rob-deck2");
//vi
let viDeckList = document.querySelector("article#player4");
let vi_deck1 = document.querySelector("section#vi-deck1");
let vi_deck2 = document.querySelector("section#vi-deck2");
//fah
let fahDeckList = document.querySelector("article#player5");
let fah_deck1 = document.querySelector("section#fah-deck1");
let fah_deck2 = document.querySelector("section#fah-deck2");
//feh
let fehDeckList = document.querySelector("article#player6");
let feh_deck1 = document.querySelector("section#feh-deck1");
let feh_deck2 = document.querySelector("section#feh-deck2");

function jao1_click() {
    jaoDeckList.style.display = "block";
    jao_deck1.style.display = "block";
    jao_deck2.style.display = "none";
}

function jao2_click() {
    jaoDeckList.style.display = "block";
    jao_deck2.style.display =  "block";
    jao_deck1.style.display = "none";
}

function tila1_click() {
    tilaDeckList.style.display = "block";
    tila_deck1.style.display = "block";
    tila_deck2.style.display = "none";
}

function tila2_click() {
    tilaDeckList.style.display = "block";
    tila_deck2.style.display = "block";
    tila_deck1.style.display = "none";
}

function rob1_click() {
    robDeckList.style.display = "block";
    rob_deck1.style.display = "block";
    rob_deck2.style.display = "none";
}

function rob2_click() {
    robDeckList.style.display = "block";
    rob_deck2.style.display = "block";
    rob_deck1.style.display = "none";
}

function vi1_click() {
    viDeckList.style.display = "block";
    vi_deck1.style.display = "block";
    vi_deck2.style.display = "none";
}

function vi2_click() {
    viDeckList.style.display = "block";
    vi_deck2.style.display = "block";
    vi_deck1.style.display = "none";
}

function fah1_click() {
    fahDeckList.style.display = "block";
    fah_deck1.style.display = "block";
    fah_deck2.style.display = "none";
}

function fah2_click() {
    fahDeckList.style.display = "block";
    fah_deck2.style.display = "block";
    fah_deck1.style.display = "none";
}

function feh1_click() {
    fehDeckList.style.display = "block";
    feh_deck1.style.display = "block";
    feh_deck2.style.display = "none";
}

function feh2_click() {
    fehDeckList.style.display = "block";
    feh_deck2.style.display = "block";
    feh_deck1.style.display = "none";
}