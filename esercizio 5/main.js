// DICHIARAZIONE
let month = prompt("Inserisci il numero del mese");
const daysInMonth = getDaysByMonth(month);

// FUNCTION
function getDaysByMonth(monthIndex) {

    if (monthIndex < 1 || monthIndex > 12) {
        return "Numero non valido"
    }

    const year = new Date().getFullYear();

    if (monthIndex === 1) {
        return "Il mese é Gennaio e ha 31 giorni";
    }
    else if (monthIndex === 2) {
        if (year % 4 === 0) {
            return "Il mese é Febbraio e ha 28 giorni";
        } else {
            return "Il mese é Febbraio e ha 29 giorni";
        }
    }
    else if (monthIndex === 3) {
        return "Il mese é Marzo e ha 31 giorni";
    }
    else if (monthIndex === 4) {
        return "Il mese é Aprile e ha 30 giorni";
    }
    else if (monthIndex === 5) {
        return "Il mese é Maggio ha 31 giorni";
    }
    else if (monthIndex === 6) {
        return "Il mese é Giugno e ha 30 giorni";
    }
    else if (monthIndex === 7) {
        return "Il mese é Luglio e ha 31 giorni";
    }
    else if (monthIndex === 8) {
        return "Il mese é Agosto e ha 31 giorni";
    }
    else if (monthIndex === 8) {
        return "Il mese é Agosto e ha 31 giorni";
    }
    else if (monthIndex === 8) {
        return "Il mese é Agosto e ha 31 giorni";
    }
    else if (monthIndex === 8) {
        return "Il mese é Agosto e ha 31 giorni";
    }
    else if (monthIndex === 8) {
        return "Il mese é Agosto e ha 31 giorni";
    }

}