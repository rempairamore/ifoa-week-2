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
    if((n >= 20 && n <= 100) || n === 400) {
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
    if((x % 3 === 0 || x % 7 === 0) && x >= 0) {
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
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata 
 da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta 
 nella stringa.
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
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro 
 un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
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




//##########################  QUI   INIZIANO    GLI EXTRA


// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(x) {
    let somma = 0;
    for(let i = 0; i<x.length; i++) {
        if(x[i] > 5) {
            console.log(x[i])
            somma += x[i]
        }
    }
    return somma;

}

// console.log(checkArray(giveMeRandom(10)))


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
    {
        id: 1,
        name: "orologio1",
        price: 220,
        quantity: 1
    },
    {
        id: 2,
        name: "bracciale1",
        price: 20,
        quantity: 3
    },
    {
        id: 3,
        name: "orecchino1",
        price: 1000,
        quantity: 2
    },
    {
        id: 4,
        name: "pantalone1",
        price: 80,
        quantity: 3
    }
]

function shoppingCartTotal() {
    let totaleNetto = 0;
    for(let i = 0; i < shoppingCart.length; i++) {
        totaleNetto += shoppingCart[i].price * shoppingCart[i].quantity;
    } 
    return totaleNetto;
}

// console.log(shoppingCartTotal())

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


function addToShoppingCart(id) {
    for(let i = 0; i < shoppingCart.length; i++) {
        if(id == shoppingCart[i].id) {
            shoppingCart[i].quantity++
        }
    }
 
} 
// addToShoppingCart(2)

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e 
 ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart() {
    let maxPrice = 0;
    let arrayNumber;
    for(let i = 0; i < shoppingCart.length; i++) {
        if(shoppingCart[i].price > maxPrice) {
            maxPrice = shoppingCart[i].price
            arrayNumber = i;
        }
    }
    return  arrayNumber
}

// console.log(maxShoppingCart())

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart() {
    console.log(shoppingCart[shoppingCart.length - 1])
}

// latestShoppingCart()


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil (x) {
    let treVolte = 0;
    let randNumber = 0;
    while(treVolte != 3) {
        if(x >= 0 && x < 10) {
            randNumber = Math.floor(Math.random() * 10);
            console.log(randNumber);
        } else {
            console.log("inserisci un valore tra 0 e 9")
            return "inserisci un valore tra 0 e 9"
        }
        if(randNumber > x) {
            treVolte++;
        } else {
            treVolte = 0;
        }
    }
}

// loopUntil(5)




/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica.
 La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function average(arrayExtra7) {
    let mediaAritmetica = 0;
    let numeriTot = 0;
    for(let i = 0; i < arrayExtra7.length; i++) {
        if(typeof arrayExtra7[i] === 'number') {
            mediaAritmetica += arrayExtra7[i];
            numeriTot++;
        }
    }
     console.log(mediaAritmetica / numeriTot);
}

let arrayTest = ['ciao', 9, 10, 10, true, 'ciao', 43242342432432434234234, 'ajoo come stai', "eh si eh"];

// average(arrayTest);





/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function longest(arrayExtra8) {
    let lungaChar = 0;
    let lungaID = 0;
    for(let i = 0; i < arrayExtra8.length; i++) {
        if(arrayExtra8[i].length > lungaChar) {
            lungaChar = arrayExtra8[i].length;
            lungaID = i;
        }
    }
    console.log("l'id piu' lungo e' il: " + lungaID + ". Il suo contenuto e' il seguente: " + arrayExtra8[lungaID])
}

// longest(arrayTest)


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent) {
    let newEmail = emailContent.toLowerCase()
    if(newEmail.search("spam") >= 0 || newEmail.search("scam") >= 0) {
        return false;
    } else {
        return true;
    }
}

// console.log(antiSpam("ciao Come staii qui c'e' dello SAM"))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
