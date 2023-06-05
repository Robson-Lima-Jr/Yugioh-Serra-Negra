//Função para mudar o tipo de menu exibido quando a pagina tiver tamanhos diferentes
function screenChange() {
    let menuArea = document.querySelector("menu#menuArea");

    if (window.innerWidth >= 768) {
        menuArea.style.display = "block";
    } else {
        menuArea.style.display = "none";
    }
}

//Função para abrir e fechar o menu no mobile
function menuClick() {
    let menuArea = document.querySelector("menu#menuArea");

    if (menuArea.style.display == "block") {
        menuArea.style.display = "none";
    } else {
        menuArea.style.display = "block";
    }
}

//Função para quando mudar a opção no select, abrir na tela os dados dos decks referentes ao nome
function changePlayer() {
    let currentPosition = document.querySelector("select#playerMobile");

    let jaoDecks = document.querySelector("aside#jao-decks");
    let tilaDecks = document.querySelector("aside#tila-decks");
    let robDecks = document.querySelector("aside#rob-decks");
    let viDecks = document.querySelector("aside#vi-decks");
    let fahDecks = document.querySelector("aside#fah-decks");
    let fehDecks = document.querySelector("aside#feh-decks");

    if (currentPosition.value === "jao") {
        jaoDecks.style.display = "block";
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
        tilaDecks.style.display = "block";
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
        robDecks.style.display = "block";
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
        viDecks.style.display = "block";
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
        fahDecks.style.display = "block";
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
        fehDecks.style.display = "block";
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
let rei = document.querySelector("section#rei-deck");
let dino = document.querySelector("section#dino-deck");
let gouki = document.querySelector("section#gouki-deck");
let abc = document.querySelector("section#abc-deck");
let pescador = document.querySelector("section#pescador-deck");
//tila
let tilaDeckList = document.querySelector("article#player2");
let buster = document.querySelector("section#buster-deck");
let blue = document.querySelector("section#blue-deck");
let dark = document.querySelector("section#dark-deck");
//rob
let robDeckList = document.querySelector("article#player3");
let cyber = document.querySelector("section#cyber-deck");
let cyberdark = document.querySelector("section#cyberdark-deck");
let uria = document.querySelector("section#uria-deck");
let dinomist = document.querySelector("section#dinomist-deck");
let malefic = document.querySelector("section#malefic-deck");
//vi
let viDeckList = document.querySelector("article#player4");
let caveira = document.querySelector("section#caveira-deck");
let eldlich = document.querySelector("section#eldlich-deck");
let ed = document.querySelector("section#ed-deck");
let maju = document.querySelector("section#maju-deck");
let exodia = document.querySelector("section#exodia-deck");
//fah
let fahDeckList = document.querySelector("article#player5");
let zircon = document.querySelector("section#zircon-deck");
let magnet = document.querySelector("section#magnet-deck");
//feh
let fehDeckList = document.querySelector("article#player6");
let sapo = document.querySelector("section#sapo-deck");
let burn = document.querySelector("section#burn-deck");
let amazoness = document.querySelector("section#amazoness-deck");
let timelord = document.querySelector("section#timelord-deck");

function dino_click() {
    jaoDeckList.style.display = "block";
    dino.style.display = "block";
    gouki.style.display = "none";
    abc.style.display = "none";
    rei.style.display = "none";
    pescador.style.display = "none";
}

function gouki_click() {
    jaoDeckList.style.display = "block";
    gouki.style.display = "block";
    dino.style.display = "none";
    abc.style.display = "none";
    rei.style.display = "none";
    pescador.style.display = "none";
}

function abc_click() {
    jaoDeckList.style.display = "block";
    abc.style.display = "block";
    dino.style.display = "none";
    gouki.style.display = "none";
    rei.style.display = "none";
    pescador.style.display = "none";
}

function rei_click() {
    jaoDeckList.style.display = "block";
    rei.style.display = "block";
    dino.style.display = "none";
    gouki.style.display = "none";
    abc.style.display = "none";
    pescador.style.display = "none";
}

function pescador_click() {
    jaoDeckList.style.display = "block";
    pescador.style.display = "block";
    dino.style.display = "none";
    gouki.style.display = "none";
    abc.style.display = "none";
    rei.style.display = "none";
}

function buster_click() {
    tilaDeckList.style.display = "block";
    buster.style.display = "block";
    blue.style.display = "none";
    dark.style.display = "none";
}

function blue_click() {
    tilaDeckList.style.display = "block";
    blue.style.display = "block";
    buster.style.display = "none";
    dark.style.display = "none";
}

function dark_click() {
    tilaDeckList.style.display = "block";
    dark.style.display = "block";
    buster.style.display = "none";
    blue.style.display = "none";
}

function cyber_click() {
    robDeckList.style.display = "block";
    cyber.style.display = "block";
    cyberdark.style.display = "none";
    uria.style.display = "none";
    dinomist.style.display = "none";
    malefic.style.display = "none";
}

function cyberdark_click() {
    robDeckList.style.display = "block";
    cyberdark.style.display = "block";
    cyber.style.display = "none";
    uria.style.display = "none";
    dinomist.style.display = "none";
    malefic.style.display = "none";
}

function uria_click() {
    robDeckList.style.display = "block";
    uria.style.display = "block";
    cyber.style.display = "none";
    cyberdark.style.display = "none";
    dinomist.style.display = "none";
    malefic.style.display = "none";
}

function dinomist_click() {
    robDeckList.style.display = "block";
    dinomist.style.display = "block";
    cyber.style.display = "none";
    cyberdark.style.display = "none";
    uria.style.display = "none";
    malefic.style.display = "none";
}

function malefic_click() {
    robDeckList.style.display = "block";
    malefic.style.display = "block";
    cyber.style.display = "none";
    cyberdark.style.display = "none";
    uria.style.display = "none";
    dinomist.style.display = "none";
}

function caveira_click() {
    viDeckList.style.display = "block";
    caveira.style.display = "block";
    eldlich.style.display = "none";
    ed.style.display = "none";
    maju.style.display = "none";
    exodia.style.display = "none";
}

function eldlich_click() {
    viDeckList.style.display = "block";
    eldlich.style.display = "block";
    caveira.style.display = "none";
    ed.style.display = "none";
    maju.style.display = "none";
    exodia.style.display = "none";
}

function ed_click() {
    viDeckList.style.display = "block";
    ed.style.display = "block";
    caveira.style.display = "none";
    eldlich.style.display = "none";
    maju.style.display = "none";
    exodia.style.display = "none";
}

function maju_click() {
    viDeckList.style.display = "block";
    maju.style.display = "block";
    caveira.style.display = "none";
    eldlich.style.display = "none";
    ed.style.display = "none";
    exodia.style.display = "none";
}

function exodia_click() {
    viDeckList.style.display = "block";
    exodia.style.display = "block";
    caveira.style.display = "none";
    eldlich.style.display = "none";
    ed.style.display = "none";
    maju.style.display = "none";
}

function zircon_click() {
    fahDeckList.style.display = "block";
    zircon.style.display = "block";
    magnet.style.display = "none";
}

function magnet_click() {
    fahDeckList.style.display = "block";
    magnet.style.display = "block";
    zircon.style.display = "none";
}

function sapo_click() {
    fehDeckList.style.display = "block";
    sapo.style.display = "block";
    burn.style.display = "none";
    amazoness.style.display = "none";
    timelord.style.display = "none";
}

function burn_click() {
    fehDeckList.style.display = "block";
    burn.style.display = "block";
    sapo.style.display = "none";
    amazoness.style.display = "none";
    timelord.style.display = "none";
}

function amazoness_click() {
    fehDeckList.style.display = "block";
    amazoness.style.display = "block";
    sapo.style.display = "none";
    burn.style.display = "none";
    timelord.style.display = "none";
}

function timelord_click() {
    fehDeckList.style.display = "block";
    timelord.style.display = "block";
    sapo.style.display = "none";
    burn.style.display = "none";
    amazoness.style.display = "none";
}

