# Esercizio 5
Stai organizzando un evento. Scrivi una funzione che ti dica quanti giorni ha un determinato mese.

## Ragionamento
- Leggiamo il mese
- SE il mese é uguale a 1
    RETURN "Gennaio"

    - ...

- SE il mese é uguale a 12
    RETURN "Dicembre"

## Codifica
``` js
let month = Number(prompt("Inserisci il numero del mese"));

const daysInMonth = getDaysByMonth(month);

console.log(daysInMonth);


function getDaysByMonth(monthIndex) {

    if (monthIndex < 1 || monthIndex > 12) {
        return "Numero non valido";

    }

    const year = new Date().getFullYear();


    switch (monthIndex) {
        case 1: return "Il mese é Gennaio e ha 31 giorni";
        case 2: return "Il mese é Febbraio e ha 28 giorni";
        case 3: return "Il mese é Marzo e ha 31 giorni";
        case 4: return "Il mese é Aprile e ha 30 giorni";
        case 5: return "Il mese é Maggio ha 31 giorni";
        case 6: return "Il mese é Giugno e ha 30 giorni";
        case 7: return "Il mese é Luglio e ha 31 giorni";
        case 8: return "Il mese é Agosto e ha 31 giorni";
        case 9: return "Il mese é Settembre e ha 30 giorni";
        case 10: return "Il mese é Ottobre e ha 31 giorni";
        case 11: return "Il mese é Novembre e ha 30 giorni";
        case 12: return "Il mese é Dicembre e ha 31 giorni";
        default: return "Mese non valido";
    }

    // if (monthIndex === 1) {
    //     return "Il mese é Gennaio e ha 31 giorni";
    // }
    // else if (monthIndex === 2) {
    //     if (year % 4 === 0) {
    //         return "Il mese é Febbraio e ha 28 giorni";
    //     } else {
    //         return "Il mese é Febbraio e ha 29 giorni";
    //     }
    // }
    // else if (monthIndex === 3) {
    //     return "Il mese é Marzo e ha 31 giorni";
    // }
    // else if (monthIndex === 4) {
    //     return "Il mese é Aprile e ha 30 giorni";
    // }
    // else if (monthIndex === 5) {
    //     return "Il mese é Maggio ha 31 giorni";
    // }
    // else if (monthIndex === 6) {
    //     return "Il mese é Giugno e ha 30 giorni";
    // }
    // else if (monthIndex === 7) {
    //     return "Il mese é Luglio e ha 31 giorni";
    // }
    // else if (monthIndex === 8) {
    //     return "Il mese é Agosto e ha 31 giorni";
    // }
    // else if (monthIndex === 9) {
    //     return "Il mese é Settembre e ha 30 giorni";
    // }
    // else if (monthIndex === 10) {
    //     return "Il mese é Ottobre e ha 31 giorni";
    // }
    // else if (monthIndex === 11) {
    //     return "Il mese é Novembre e ha 30 giorni";
    // }
    // else if (monthIndex === 12) {
    //     return "Il mese é Dicembre e ha 31 giorni";
    // }

}
```