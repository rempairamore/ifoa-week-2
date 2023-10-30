/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
//ci sono le stringhe di testo
let stringa1 = 'ciao sono una "stringa" con apice singolo';
let stringa2 = "sarebbe d'uopo usare l'apostrofo";

//ci sono i numeri
let numero1 = 22; //come vedi non metto le parentesi
let virgolone = 33.8; //come vedi posso usare anche i numeri con la "virgola"

//ci sono i booleani
let veroVerissimo = true;
let seiFalso = false;

//potresti anche cambiare idea su una variabile e farla diventare una nullita'
let italiano = 'very good';
italiano = null;

//potresti avere una variabile e non definirla per il momento
let indeciso;
indeciso = undefined; //in questo esempio ho anche voluto usare due righe, una per dichiarare, una per inizializzare

// ARRAY e cose varie ancora non le abbiamo viste

// ###########################################################################################


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = 'Mario'


// ###########################################################################################



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma1 = 12 + 20;
console.log('La somma tra 12 e 20: ' + somma1)


// ###########################################################################################



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;


// ###########################################################################################



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = 'Petr3ll4'
console.log(myName) //con var e let posso cambiare il valore alla variabile tranquillamente

//adesso proviamo con una costante
const nuovoName = 'Mario' //creo una costante con il mio nome
// nuovoName = 'Giorgio'  ovviamente la commento questa riga


// ###########################################################################################



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione1 = 4 - x;

console.log(sottrazione1)


// ###########################################################################################



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
name1 = 'john';
name2 = 'John';

console.log('comparazione per come sono: ' + (name1 != name2))

//mettiamoli lowercase entrambe
console.log('comparazione applicando lowercase: ' + (name1.toLowerCase != name2.toLowerCase))

