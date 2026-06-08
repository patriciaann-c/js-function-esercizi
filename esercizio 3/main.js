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
    const noMoreWork = retiredYear - age

    return noMoreWork;
}

// LOGIC
const results = calcRemainYearWork(birthYear, gender);

// OUTPUT
console.log("Hai ancora", results, "anni prima di andare in pensione");
