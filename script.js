function btnClick() {
    let jaoDecks = document.querySelector("aside#jao-decks");
    let tilaDecks = document.querySelector("aside#tila-decks");
    let robDecks = document.querySelector("aside#rob-decks");
    let viDecks = document.querySelector("aside#vi-decks");
    let fahDecks = document.querySelector("aside#fah-decks");
    let fehDecks = document.querySelector("aside#feh-decks");

    let playerList = document.getElementsByName("players");

    if (playerList[0].checked) {
        jaoDecks.style.display = "block";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";
        jaoDeck.style.display = "none";
        tilaDeck.style.display = "none";
        robDeck.style.display = "none";
    } else if (playerList[1].checked) {
        tilaDecks.style.display = "block";
        jaoDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";
        jaoDeck.style.display = "none";
        tilaDeck.style.display = "none";
        robDeck.style.display = "none";
    } else if (playerList[2].checked) {
        robDecks.style.display = "block";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";
        jaoDeck.style.display = "none";
        tilaDeck.style.display = "none";
        robDeck.style.display = "none";
    } else if (playerList[3].checked) {
        viDecks.style.display = "block";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";
        jaoDeck.style.display = "none";
        tilaDeck.style.display = "none";
        robDeck.style.display = "none";
    } else if (playerList[4].checked) {
        fahDecks.style.display = "block";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fehDecks.style.display = "none";
        jaoDeck.style.display = "none";
        tilaDeck.style.display = "none";
        robDeck.style.display = "none";
    } else if (playerList[5].checked) {
        fehDecks.style.display = "block";
        jaoDecks.style.display = "none";
        tilaDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        jaoDeck.style.display = "none";
        tilaDeck.style.display = "none";
        robDeck.style.display = "none";
    }
}
//Area de cliques nas imagens para abrir os arquivos
//jao
let jaoDeck = document.querySelector("article#player1");
let rei = document.querySelector("section#rei-deck");
let dino = document.querySelector("section#dino-deck");
let gouki = document.querySelector("section#gouki-deck");
let abc = document.querySelector("section#abc-deck");
let pescador = document.querySelector("section#pescador-deck");
//tila
let tilaDeck = document.querySelector("article#player2");
let buster = document.querySelector("section#buster-deck");
let blue = document.querySelector("section#blue-deck");
let dark = document.querySelector("section#dark-deck");
//rob
let robDeck = document.querySelector("article#player3");
let cyber = document.querySelector("section#cyber-deck");
let cyberdark = document.querySelector("section#cyberdark-deck");
let uria = document.querySelector("section#uria-deck");
let dinomist = document.querySelector("section#dinomist-deck");
let malefic = document.querySelector("section#malefic-deck");

function dino_click() {
    jaoDeck.style.display = "block";
    dino.style.display = "block";
    gouki.style.display = "none";
    abc.style.display = "none";
    rei.style.display = "none";
    pescador.style.display = "none";
}

function gouki_click() {
    jaoDeck.style.display = "block";
    gouki.style.display = "block";
    dino.style.display = "none";
    abc.style.display = "none";
    rei.style.display = "none";
    pescador.style.display = "none";
}

function abc_click() {
    jaoDeck.style.display = "block";
    abc.style.display = "block";
    dino.style.display = "none";
    gouki.style.display = "none";
    rei.style.display = "none";
    pescador.style.display = "none";
}

function rei_click() {
    jaoDeck.style.display = "block";
    rei.style.display = "block";
    dino.style.display = "none";
    gouki.style.display = "none";
    abc.style.display = "none";
    pescador.style.display = "none";
}

function pescador_click() {
    jaoDeck.style.display = "block";
    pescador.style.display = "block";
    dino.style.display = "none";
    gouki.style.display = "none";
    abc.style.display = "none";
    rei.style.display = "none";
}

function buster_click() {
    tilaDeck.style.display = "block";
    buster.style.display = "block";
    blue.style.display = "none";
    dark.style.display = "none";
}

function blue_click() {
    tilaDeck.style.display = "block";
    blue.style.display = "block";
    buster.style.display = "none";
    dark.style.display = "none";
}

function dark_click() {
    tilaDeck.style.display = "block";
    dark.style.display = "block";
    buster.style.display = "none";
    blue.style.display = "none";
}

function cyber_click() {
    robDeck.style.display = "block";
    cyber.style.display = "block";
    cyberdark.style.display = "none";
    uria.style.display = "none";
    dinomist.style.display = "none";
    malefic.style.display = "none";
}

function cyberdark_click() {
    robDeck.style.display = "block";
    cyberdark.style.display = "block";
    cyber.style.display = "none";
    uria.style.display = "none";
    dinomist.style.display = "none";
    malefic.style.display = "none";
}

function uria_click() {
    robDeck.style.display = "block";
    uria.style.display = "block";
    cyber.style.display = "none";
    cyberdark.style.display = "none";
    dinomist.style.display = "none";
    malefic.style.display = "none";
}

function dinomist_click() {
    robDeck.style.display = "block";
    dinomist.style.display = "block";
    cyber.style.display = "none";
    cyberdark.style.display = "none";
    uria.style.display = "none";
    malefic.style.display = "none";
}

function malefic_click() {
    robDeck.style.display = "block";
    malefic.style.display = "block";
    cyber.style.display = "none";
    cyberdark.style.display = "none";
    uria.style.display = "none";
    dinomist.style.display = "none";
}