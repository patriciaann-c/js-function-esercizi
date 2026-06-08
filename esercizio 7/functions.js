function calcAverage(...votes) {

    const vote1 = (prompt("Inserisci il primo voto"));
    const vote2 = (prompt("Inserisci il secondo voto"));
    const vote3 = (prompt("Inserisci il terzo voto"));

    let sum = 0;

    // for (let i = 0; i < votes.length; i++) {
    //     const vote = Number(votes[i]);
    //     sum = sum + vote;
    // }

    const avg = sum / votes.lengthS;

    return avg.toFixed(2);
}
