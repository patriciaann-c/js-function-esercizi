let filmLength = Number(prompt("Inserisci la durata del film in minuti"));

// const results = getDuration(filmLength);
// console.log(results);

// console.log("Il film dura", results[0], "e", results[1], "minuti");

// DESTRUCTURING
const [hours, minutes] = getDuration(filmLength);

console.log("Il film dura", hours, "e", minutes, "minuti");


function getDuration(filmLength) {

    // if (typeof (filmLength) !== "number") {
    //     filmLength = Number(filmLength);
    // }

    if (filmLength < 0) {
        return "Errore! Il minutaggio non é corretto"
    }
    const hours = parseInt(filmLength / 60);
    const minutes = filmLength % 60;

    return [hours, minutes]
    // return `Il film dura ${hours} ore e ${minutes} minuti`;
}