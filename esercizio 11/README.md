# Esercizio 11
In aeroporto, i bagagli hanno categorie precise. Scrivi una funzione che riceve il peso in kg e restituisce "Bagaglio a mano" se >= 10kg, "Bagaglio da stiva" se >= 23kg, "Collo ingombrante" se superiore.

## Ragionamento
- Dichiara la funzione con il peso dei bagagli
    - SE il peso é <= 10kg
        - RETURN "Bagaglio a mano"
    - SE é <= 23kg
        RETURN "Bagaglio da stiva"
    - SE é superiore
        - RETURN "Collo ingombrante"

## Codifica
``` js
const weight = Number(prompt("Inserisci il peso del tuo bagaglio"));

function getBaggage(weight) {

    if (weight <= 10) {
        return "Bagaglio a mano"
    } else if (weight <= 23) {
        return "Bagaglio da stiva"
    } else {
        return "Collo ingombrante"
    }
}

console.log(getBaggage(weight));
```