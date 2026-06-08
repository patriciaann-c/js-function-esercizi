// DICHIARAZIONE
let vote = Number(prompt("Inserisci un voto da 1 a 10"));

// FUNCTION
function calcVote(vote) {

    if (vote < 6) {
        return language === "it" ? "Insufficiente" : "Insufficient";
    } else if (vote <= 9) {
        return language === "it" ? "Sufficiente" : "Good";
    } else {
        return language === "it" ? "Ottimo" : "Excellent";
    }
}

const comment = calcVote(vote);
console.log(comment);
