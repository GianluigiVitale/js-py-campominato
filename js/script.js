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

var allNumbers = [];


while (allNumbers.length < 16) {                        // genero 16 numeri da 1 a 100, se ci sono dei doppioni non li aggiunge, e continua a generare i numeri fino a che non sono 16
    var numeroGenerated = generaRandomMinMax(1, 100);
    if (!allNumbers.includes(numeroGenerated)) {
        allNumbers.push(numeroGenerated)
    }
}

for (var i = 1; i <= 84 ; i++) {                                            // per vincere ci devono essere 100 numeri in totale nell'array, per fare cio' se 16 sono generati, al massimo l'utente ne puo' inserirne 84 quindi faccio un ciclo che si ripete massimo 84 volte
    var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));     // prompt numero
    if (isNaN(numeroUtente)) {                                         // controllo se 'numeroUtente' e' un numero ed e' compreso tra 1 e 100
        while (isNaN(numeroUtente)) {                                       // se non e' un numero lo chiede
            numeroUtente = parseInt(prompt('Perfavore Inserisci un numero tra 1 e 100'));
        }
        while ((numeroUtente < 1) || (numeroUtente > 100)) {                  // se e' un numero ma non e' compreso tra 1 e 100 ne chiede un altro
            numeroUtente = parseInt(prompt('Perfavore Inserisci un numero tra 1 e 100'));
        }
    } else if (!isNaN(numeroUtente)) {                                 // se e' un numero
        while ((numeroUtente < 1) || (numeroUtente > 100)) {           // ma non e' compreso tra 1 e 100 ne chiede un altro
            numeroUtente = parseInt(prompt('Perfavore Inserisci un numero tra 1 e 100'));
        }
    }
    if (!allNumbers.includes(numeroUtente)) {                   // se numeroUtente non e' presente nell'array lo aggiungo
        allNumbers.push(numeroUtente)
    } else {                                                   // altrimenti calcolo il punteggio e breakko il ciclo
        var punteggio = (allNumbers.length - 16);
        console.log(':( hai perso punteggio: ' + punteggio);
        break
    }
    if (i == 84) {                                            // se i = 84 vuol dire che l'utente ha inserito 84 numeri, e 84 + 16 generati = 100, vuol dire che non si possono inserire altri numeri e l'utente ha vinto.
        console.log('hai vinto');
    }
}









function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
