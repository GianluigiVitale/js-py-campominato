# FUNZIONI UTLIZZATE


def sceltaDifficolta():               # per scegliere la difficolta' prompt con numero da 1 a 3
    scelta = input('Inserisci la difficoltà tra 1, 2 o 3 ')
    while (not scelta.isdigit()) or (int(scelta) < 1) or (int(scelta) > 3):
        scelta = input('Perfavore scrivi un numero da 1 a 3 ')

    dimCampo = 0

    if int(scelta) == 1:
        dimCampo = 100
    elif int(scelta) == 2:
        dimCampo = 80
    elif int(scelta) == 3:
        dimCampo = 50

    return dimCampo


def minaIlCampo(dimCampo, totMine):   # funzione che genera totMine in base a variabile tra un numero 1 e dimCampo (senza doppioni)
    posizMine = []
    while len(posizMine) < totMine:
        minaDaPiazzare = random.randrange(1, dimCampo)
        if not minaDaPiazzare in posizMine:
            posizMine.append(minaDaPiazzare)


    return posizMine

# MODULI

import math
import random

# GAME

dimensioneCampo = sceltaDifficolta()       # attraverso la funzione sceltaDifficolta seleziono la dimensioneCampo
totaleMine = 16
bandierineMax = dimensioneCampo - totaleMine

posizioneMine = minaIlCampo(dimensioneCampo, totaleMine)   # attraverso funzione minaIlCampo genero i numeri e li salvo in posizioneMine
print(posizioneMine)
bandierinePiazzate = []

boom = False
while (len(bandierinePiazzate) < bandierineMax) and (boom == False):                                # finche' o si raggiunge il numero massimo di bandierinePiazzate o non si inserisce un numero gia' presente il ciclo si ripete
    bandierinaDaPiazzare = input('Scrivi un numero da 1 a ' + str(dimensioneCampo) + ' ')           # prompt numero da 1 a dimensioneCampo
    while (not bandierinaDaPiazzare.isdigit()) or (int(bandierinaDaPiazzare) < 1) or (int(bandierinaDaPiazzare) > dimensioneCampo):    # controllo se input e' un numero ed e' compreso tra 1 e dimCampo
        bandierinaDaPiazzare = input('Perfavore scrivi un numero da 1 a ' + str(dimensioneCampo) + ' ')

    if not int(bandierinaDaPiazzare) in bandierinePiazzate:            # SE bandierinaDaPiazzare non e' inclusa in bandierinePiazzate
        if not int(bandierinaDaPiazzare) in posizioneMine:             # SE bandierinaDaPiazzare non e' in posizioneMine, push in bandierinePiazzate
            bandierinePiazzate.append(bandierinaDaPiazzare)
            if len(bandierinePiazzate) == bandierineMax:                    # SE si raggiunge bandierineMax print 'hai vinto'
                print('Hai Vintoooo !!!!!')
            else:
                print('Hai piazzato una bandierina')                           # ALTRIMENTI notifica che 'hai piazzato una bandierina'

        else:                                                         # ALTRIMENTI fine gioco
            print('BOOOM!! hai beccato una bomba! Hai piazzato ' + str(len(bandierinePiazzate)) + ' bandierine')
            boom = True

    else:                                                    # ALTRIMENTI hai gia' inserito questo numero
        print('Hai già inserito questo numero')
