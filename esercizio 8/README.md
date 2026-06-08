# Esercizio 8
Un calendario digitale deve mostrare il giorno esteso. Scrivi una funzione che riceve un numero da 1 a 7 e restituisce il nome del giorno corrispondente (1 = Lunedì, ..., 7 = Domenica). Se il numero non è valido, restituisce "Errore".

## Ragionamento
- Definisci un numero da 1 a 7
- Definisci i giorni della settimana
- Dichiara la FUNZIONE
    - il numero scelto corrisponde al numero del giorno della settimana
    - SE il numero non é valido
        - RETURN "Errore"

## Codifica
``` js
const num = Number(prompt("Inserisci un numero da 1 a 7"));

function numToDays(num) {

    if (num < 0 || num > 7) {
        return "Errore"
    }

    switch (num) {
        case 1: return "Lunedì"
        case 2: return "Martedì"
        case 3: return "Mercoledì"
        case 4: return "Giovedì"
        case 5: return "Venerdì"
        case 6: return "Sabato"
        case 7: return "Domenica"
        default: return "Giorno non valido"
    }

}
const results = numToDays(num);
console.log(results);
```