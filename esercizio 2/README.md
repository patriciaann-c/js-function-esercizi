# Esercizio 2
Un taxi applica una tariffa extra fissa dopo il mezzogiorno. Scrivi una funzione che calcoli il totale della corsa dato il prezzo base, l'orario di partenza e l'orario di arrivo.

## Ragionamento
- Dichiara il prezzo base
- Dichiara l'orario di partenza
- Dichiara l'orario di arrivo
- Dichiara tariffa extra = 5
- Definiamo la FUNZIONE
    - calcolo tariffa totale
    - stampa il prezzo

## Codifica
``` js
//DICHIARAZIONE
const prezzo_base = 4;
const tariffa_extra = 5;
const orario_partenza = 9;
const orario_arrivo = 15;

// FUNZIONE
function calcTariffa(timeStart, timeEnd, basePrice, extraPrice) {

    const extraTime = timeStart - 12;
    const baseTime = timeEnd - timeStart
    const results = baseTime * basePrice + extraTime * extraPrice;

    return results;
}

// BUSINESS LOGIC
const totale_prezzo = (calcTariffa(orario_partenza, orario_arrivo, prezzo_base, tariffa_extra));

//OUTPUT
console.log(totale_prezzo);

```