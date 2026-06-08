# Esercizio 7
Finisce l'anno scolastico e vuoi fare la media dei tuoi voti. Scrivi una funzione che riceve tre voti numerici e restituisce la media aritmetica.

## Ragionamento
- Leggiamo i voti
- Definiamo la FUNZIONE
    - Dichiara la somma dei voti (somma / totale voti)
    - Dichiara la media
- stampa la media

## Codifica
``` js
function calcAverage() {

    const vote1 = Number(prompt("Inserisci il primo voto"));
    const vote2 = Number(prompt("Inserisci il secondo voto"));
    const vote3 = Number(prompt("Inserisci il terzo voto"));

    sum = vote1 + vote2 + vote3;

    let avg = sum / 3;
    avg.toFixed(2);

    console.log(avg);
}
```