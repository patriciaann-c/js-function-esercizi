# Esercizio 1
Stai pianificando un viaggio negli USA. Scrivi una funzione che converta una somma in Euro nel corrispondente valore in Dollari, dato il tasso di cambio del giorno.

## Ragionamento
- Definiamo il tasso di cambio
- Leggiamo la somma in €
- Moltiplichiamo la somma per il tasso di cambio
- Scriviamo una funzione
- Richiamiamo la funzione

## Codifica
``` js
// DICHIARAZIONE
const tasso_cambio = 1.08;
let somma = 55;


// FUNZIONE
function calcValore(somma, tasso_cambio) {

    const risultato = somma * tasso_cambio;

    return risultato;
}

// BUSINESS LOGIC
const somma_dollari = calcValore(somma, tasso_cambio);

// OUTPUT
console.log(somma_dollari);
```