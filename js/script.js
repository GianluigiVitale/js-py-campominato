/*
SCOPO DEL GIOCO:
    Il computer genera 16 numeri casuali tra 1 e 100.
    In seguito chiede all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
    Se il numero è presente nella lista dei numeri generati, la partita termina,
    altrimenti si continua chiedendo all’utente un altro numero.
    La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
    il numero massimo possibile di numeri consentiti.
    Al termine della partita il software comunica il punteggio, cioè il numero
    di volte che l’utente ha inserito un numero consentito.

    1. Genero 16 numeri random diversi da 1...100
        1.1 Creo un array vuoto
        1.2 Inserisco i numeri delle bombe nell'array
    2. Selectione utente
        2.1 Creo un array vuoto per i tentativi
        2.2 Chiediamo un numero da 1...100
    3. Logica del gioco
        - Ripetizione del numero
            -Il numero inserito è incluso nell'array dei numeri inseriti
        - Prendo una bomba
            -Il numero inserito è incluso nell'array delle bombe
        - Inserire il numero nell'array dei numeri inseriti
        - Se lunghezza numeri inseriti è uguale alla lunghezza massima hai vinto
    ULTIMO. Gestione errori
        1. Numero >= 1 e numero <= 100
        2. Numero deve essere un NUMERO
        3. Difficoltà deve essere un numero e compreso tra 1 e 3
*/

var dimensioneCampo = sceltaDifficolta();       // attraverso la funzione sceltaDifficolta seleziono la dimensioneCampo
var totaleMine = 16;
var bandierineMax = dimensioneCampo - totaleMine;

var posizioneMine = minaIlCampo(dimensioneCampo, totaleMine);   // attraverso funzione minaIlCampo genero i numeri e li salvo in posizioneMine
console.log(posizioneMine);
var bandierinePiazzate = [];

var boom = false;
while ((bandierinePiazzate.length < bandierineMax) && (boom === false)) {   // finche' o si raggiunge il numero massimo di bandierinePiazzate o non si inserisce un numero gia' presente il ciclo si ripete
    var bandierinaDaPiazzare = parseInt(prompt('Scrivi un numero da 1 a ' + dimensioneCampo));      // prompt numero da 1 a dimensioneCampo
    while ((isNaN(bandierinaDaPiazzare)) || (bandierinaDaPiazzare < 1) || (bandierinaDaPiazzare > dimensioneCampo)) {   // controllo se input e' un numero ed e' compreso tra 1 e dimCampo
        var bandierinaDaPiazzare = parseInt(prompt('Perfavore scrivi un numero da 1 a ' + dimensioneCampo));
    }
    if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) {   // SE bandierinaDaPiazzare non e' inclusa in bandierinePiazzate
        if (!posizioneMine.includes(bandierinaDaPiazzare)) {            // SE bandierinaDaPiazzare non e' in posizioneMine, push in bandierinePiazzate
            bandierinePiazzate.push(bandierinaDaPiazzare);
            if (bandierinePiazzate.length == bandierineMax) {                   // SE si raggiunge bandierineMax alert 'hai vinto'
                alert('Hai Vintoooo !!!!!');
            } else {
                alert('Hai piazzato una bandierina');                           // ALTRIMENTI notifica che 'hai piazzato una bandierina'
            }
        } else {                                                        // ALTRIMENTI fine gioco
            alert('BOOOM!! hai beccato una bomba! Hai piazzato ' + bandierinePiazzate.length + ' bandierine');
            boom = true;
        }
    } else {                                                    // ALTRIMENTI hai gia' inserito questo numero
        alert('Hai già inserito questo numero');
    }
}



// FUNZIONI UTILIZZATE



function sceltaDifficolta() {              // per scegliere la difficolta' prompt con numero da 1 a 3
    var scelta = parseInt(prompt('Inserisci la difficoltà tra 1, 2 o 3'));
    while ((isNaN(scelta)) || (scelta < 1) || (scelta > 3)) {
        var scelta = parseInt(prompt('Perfavore scrivi un numero da 1 a 3'));
    }
    switch (scelta) {
        case 1:
            var dimCampo = 100;
            break;
        case 2:
            var dimCampo = 80;
            break;
        case 3:
            var dimCampo = 50;
            break;
        default:
            var dimCampo = 100;
    }
    return dimCampo;
}

function minaIlCampo(dimCampo, totMine) {   // funzione che genera totMine in base a variabile tra un numero 1 e dimCampo (senza doppioni)
    var posizMine = [];
    while (posizMine.length < totMine) {
        var minaDaPiazzare = generaRandomMinMax(1, dimCampo);
        if (!posizMine.includes(minaDaPiazzare)) {
            posizMine.push(minaDaPiazzare);
        }
    }
    return posizMine;
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
