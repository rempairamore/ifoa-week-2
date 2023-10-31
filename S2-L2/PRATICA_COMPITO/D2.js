/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let num1 = 10;
let num2 = 5;

if(+num1 > +num2) {
  console.log("Il primo numero è piu' grande")
} else if(+num1 == +num2) {
  console.log("I numeri sono uguali")
} else {
  console.log("Il secondo numero è piu' grande")
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroEsercizio2 = 3;

if(numeroEsercizio2 !=5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroEsercizio3 = 15;

if((numeroEsercizio3 % 5) == 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 
  oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1es3 = 7;
let num2es3 = 8;


if(num1es3 == 8 || num2es3 == 8) {
  console.log("uno dei due numeri è 8")
} else if((num1es3 + num2es3) == 8 || (num1es3 - num2es3) == 8 || (num2es3 - num1es3) == 8) {
  console.log('la loro addizione/sottrazione e\' uguale a 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente 
  in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, 
  l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 100;

let discountPrice = totalShoppingCart - (totalShoppingCart * 20 / 100)

if(discountPrice < 50) {
  console.log('Totale Euro: ' + (discountPrice + 10))
} else {
  console.log('Totale Euro: ' + discountPrice)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// La risposta e' inclusa nell'esercizio precedente (come richiesto dalla traccia)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let es7num1 = 55;
let es7num2 = 77;
let es7num3 = 18;
let es7array = []

if(es7num1 > es7num2 && es7num1 > es7num3) {
  es7array.unshift(es7num1);
  if(es7num2 > es7num3) {
    es7array.push(es7num2)
    es7array.push(es7num3)
  } else {
    es7array.push(es7num3)
    es7array.push(es7num2)
  }
} else if(es7num2 > es7num1 && es7num2 > es7num3) {
  es7array.unshift(es7num2);
  if(es7num1 > es7num3) {
    es7array.push(es7num1)
    es7array.push(es7num3)
  } else {
    es7array.push(es7num3)
    es7array.push(es7num1)
  }
} else if(es7num3 > es7num1 && es7num3 > es7num2) {
  es7array.unshift(es7num3);
  if(es7num1 > es7num2) {
    es7array.push(es7num1)
    es7array.push(es7num2)
  } else {
    es7array.push(es7num2)
    es7array.push(es7num1)
  }
}
console.log("Ecco i numeri in ordine di grandezza: " + es7array[0] + " " + es7array[1] + " " + es7array[2])

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let es8item1 = 10;
let es8item2 = true;
let es8item3 = 'ciao';
let es8item4 = []

//Per testare l'algoritmo si puo' cambiare la variabile da controllare
if(typeof es8item2== 'number') {
  console.log('Il Valore inserito risulta essere un numero')
} else {
  console.log("il valore non risulta un numero :(")
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let es9numero = 66;

if((es9numero % 2) > 0) {
  console.log("il numero risulta essere dispari")
} else {
  console.log("il numero risulta essere pari")
}




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5 ) {
    console.log("Meno di 5");
  } else if (val > 5 && val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", 
  il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto"



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let es14array = []
es14array.splice(0, 0, 1,2,3,4,5,6,7,8,9,10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
es14array.splice(9, 1, 100)
