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
    } else if (playerList[1].checked) {
        tilaDecks.style.display = "block";
        jaoDecks.style.display = "none";
        robDecks.style.display = "none";
        viDecks.style.display = "none";
        fahDecks.style.display = "none";
        fehDecks.style.display = "none";

    }
}