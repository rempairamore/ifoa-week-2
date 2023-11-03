/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function areaRettangolo(l1, l2) {
    return l1 * l2;
}

// let es1 = areaRettangolo(10,20)
// console.log(es1)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
    if(x == y) {
        return (x + y) * 3;
    }
    return x + y;
}

// let es2 = crazySum(10,10)
// console.log(es2)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x) {
    if(x > 19) {
        return Math.abs((x - 19) * 3);
    }
    return Math.abs(x - 19);
}


// let es3 = crazyDiff(20)
// console.log(es3)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true 
 se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if((n >= 20 && n <= 100) || n == 400) {
        return true;
    }
    return false;

}

// let es4 = boundary(400)
// console.log(es4)


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(x) {
    if(x.slice(0, 7) == "EPICODE") {
        return x;
    }
    return "EPICODE " + x;
    
}

// let es5 = epify("ciao come stai")
// console.log(es5)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(x) {
    if((x % 3) == 0 || (x % 7) == 0) {
        return "il numero è multiplo";
    }
    return "il numero NON è multiplo";

}

// let es6 = check3and7(8)
// console.log(es6)




/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//devo creare un array con tutte le cifre e poi con un ciclo le pusho al contrario

function reverseString(parola) {
    let lunghezza = parola.length
    let nuova = "";
    while(lunghezza != 0) {
        nuova += parola.charAt(lunghezza)
        lunghezza--
        if(lunghezza == 0) {
            nuova += parola.charAt(0)
        }
    }
    return nuova;
}

// let es7 = reverseString("ciao")
// console.log(es7)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa) {
    stringa = stringa.toLowerCase()
    let splittate = stringa.split(" ")
    let completa = "";
    // console.log(splittate)
    for(let i = 0; i < splittate.length; i++) {
        let primalettera = splittate[i].charAt(0).toUpperCase()
        // console.log(primalettera)
        let daComporre = primalettera + splittate[i].slice(1)
        // console.log(daComporre)
        completa += " " + daComporre
    }
    return completa.trim()
    
}

// let es8 = upperFirst("Ciao come stai? tutto bene?")
// console.log(es8)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(x) {
    return trimmone = x.slice(1, (x.length -1 ))
}

// let es9 = cutString("ciao computer")
// console.log(es9)


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(x) {
    let arrayRandom = [];
    while(x>0) {
        let randomico = Math.floor(Math.random() * 11);
        arrayRandom.push(randomico);
        x--;
    }
    return arrayRandom;
}

// let es10 = giveMeRandom(10);
// console.log(es10);
