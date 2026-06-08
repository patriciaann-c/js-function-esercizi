// function calcAverage(...votes) {

//     let sum = 0;

//     for (let i = 0; i < votes.length; i++) {
//         const vote = Number(votes[i]);
//         sum = sum + vote;
//     }

//     let avg = sum / votes.length;

//     avg.toFixed(2);

//     console.log(avg);
// }


function calcAverage() {

    const vote1 = Number(prompt("Inserisci il primo voto"));
    const vote2 = Number(prompt("Inserisci il secondo voto"));
    const vote3 = Number(prompt("Inserisci il terzo voto"));

    sum = vote1 + vote2 + vote3;

    let avg = sum / 3;
    avg.toFixed(2);

    console.log(avg);
}