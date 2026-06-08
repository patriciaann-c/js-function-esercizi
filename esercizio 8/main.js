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
