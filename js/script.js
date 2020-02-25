/*
SCOPO DEL GIOCO:
Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero
di volte che l’utente ha inserito un numero consentito.

*/

var random16Numbers = [];

for (var i = 1; i <= 16; i++) {
    var numeroGenerated = generaRandomMinMax(1, 100);
    random16Numbers.push(numeroGenerated)
}

var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
if (isNaN(numeroUtente)) {
    while (isNaN(numeroUtente)) {
        numeroUtente = parseInt(prompt('Perfavore Inserisci un numero tra 1 e 100'));
    }
    while ((numeroUtente < 1) || (numeroUtente > 100)) {
        numeroUtente = parseInt(prompt('Perfavore Inserisci un numero tra 1 e 100'));
    }
}

console.log(numeroUtente);
console.log(random16Numbers);







function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
