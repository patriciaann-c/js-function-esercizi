# Esercizio 3
Scrivi una funzione che, dato l'anno di nascita e il genere (M/F), calcoli quanti anni mancano per raggiungere l'età pensionabile (fissata a 67 anni per gli uomini e 62 per le donne).

## Ragionamento
- Definiamo l'anno di nascita
- Definiamo il genere (M/F)
- Definiamo l'età pensionabile a 67 anni per gli uomini
- Definiamo l'età pensionabile a 62 per le donne
- Dichiara la FUNZIONE
    - calcola gli anni mancanti alla pensione
- stampa la funzione

## Codifica
``` js
//DICHIARAZIONE
let birthYear = Number(prompt("Inserisci il tuo anno di nascita"));
let gender = (prompt("Inserisci il genere (M/F)"));

// FUNCTION
function calcRemainYearWork(birthYear, gender) {

    let retiredYear;

    if (gender === "F") {
        retiredYear = 62;
    } else {
        retiredYear = 67;
    }

    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear;
    const noMoreWork = retiredYear - age;

    return noMoreWork;
}

// LOGIC
const results = calcRemainYearWork(birthYear, gender);

// OUTPUT
console.log("Hai ancora", results, "anni prima di andare in pensione");
```