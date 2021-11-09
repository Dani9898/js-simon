// Visualizzare in pagina 5 numeri casuali => array=[]; while (array.length < 5) {numero = mathfloor mathrandom; while (array.includes(numero); numero = mathfloor mathrandom)
// Da lì parte un timer di 30 secondi => setTimeout tempo = 30 tempo-- innerHTML tempo
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() => if tempo === 0  numero1= parseInt(prompt()) 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    const numeriCasuali = document.getElementById("numeri");
    const countdown = document.getElementById("timer");
    const risposta = document.getElementById("risultato");

    