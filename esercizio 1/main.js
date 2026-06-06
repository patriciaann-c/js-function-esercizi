// DICHIARAZIONE
const tasso_cambio = 1.08;
let somma = 55;


// FUNZIONE
function calcValore(somma, tasso_cambio) {

    const risultato = somma * tasso_cambio;

    return risultato;
}

// BUSINESS LOGIC
const somma_dollari = calcValore(somma, tasso_cambio);

// OUTPUT
console.log(somma_dollari);