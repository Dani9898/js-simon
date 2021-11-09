// Visualizzare in pagina 5 numeri casuali => array=[]; while (array.length < 5) {numero = mathfloor mathrandom; while (array.includes(numero); numero = mathfloor mathrandom)
// Da lì parte un timer di 30 secondi => setTimeout tempo = 30 tempo-- innerHTML tempo
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() => if tempo === 0  while array.length < 5 numero = parseInt(prompt()), push numero
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    // confrontare il primo numero dell'array dell'utente con ogni numero dell'array casuale. Se c'è corrispondenza allora salvare quello nell'array dei numeri indovinati. Confrontare poi gli altri. => for (let i = 0; i < array.length; i++) { if (numeriCasuali.includes(numeriUtente[i]) { nuovoarray.push[numeriUtente[i]]}}


    const numeriCasuali = document.getElementById("numeri");
    const countdown = document.getElementById("timer");

    const randomNumbers = [];
    while (randomNumbers.length < 5) {
        let numero = Math.floor(Math.random() * 100 + 1);
        while (randomNumbers.includes(numero)) {
            numero = Math.floor(Math.random() * 100 + 1);
        }
        randomNumbers.push(numero)
    }
console.log(randomNumbers);

randomNumbers.forEach((elemento) => {
    numeriCasuali.innerHTML += `${elemento} `;
})

let tempo = 30;
countdown.innerHTML = tempo;

const numeriUtente = [];
const numeriIndividuati = [];

const clock = setInterval(myFunction, 1000);
function myFunction() {
    tempo--;
    countdown.innerHTML = tempo;
    if (tempo === 0) {
        countdown.innerHTML = "";

        clearInterval(clock);

        while (numeriUtente.length < 5) {
            let numeroChiesto = parseInt(prompt("Inserisci il numero"));

            while (isNaN(numeroChiesto)) {
            numeroChiesto = parseInt(prompt("Inserisci il numero"));
            }
            numeriUtente.push(numeroChiesto)
        }
        
        console.log(numeriUtente);

        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers.includes(numeriUtente[i]) && !numeriIndividuati.includes(numeriUtente[i])) {
                numeriIndividuati.push(numeriUtente[i])   
            }
        }

        console.log(numeriIndividuati);
        numeriCasuali.innerHTML = "";

        numeriIndividuati.forEach((elemento) => {
            numeriCasuali.innerHTML += `${elemento} `
        })

    }
}

