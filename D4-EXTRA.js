// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = array => {
	sum = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 5) {
			console.log(array[i] + ' is greater than 5')
			sum += array[i]
		} else {
			console.log(array[i] + ' is lower than 5')
		}
	}
	return sum
}
const sumRandom = checkArray(giveMeRandom(10))
console.log(sumRandom)

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
	{ price: 20, name: 'Product 1', id: 1, quantity: 3 },
	{ price: 15, name: 'Product 2', id: 2, quantity: 1 },
	{ price: 4, name: 'Product 3', id: 3, quantity: 2 },
	{ price: 100, name: 'Product 3', id: 5, quantity: 1 },
]
let cartTotal = 0

const shoppingCartTotal = () => {
	if (shoppingCart instanceof Array) return false
	for (let i = 0; i < shoppingCart.length; i++) {
		const { price, quantity } = shoppingCart[i]
		cartTotal += price * quantity
	}
}
console.log(cartTotal)

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = ({ price, name, id, quantity }) => {
	shoppingCart.push({ price, name, id, quantity })
	shoppingCartTotal()
}

addToShoppingCart({ id: 5, name: 'Product 4', price: 50, quantity: 2 })
console.log(shoppingCart)
console.log(cartTotal)

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = () => {
	let max = 0
	for (let i = 0; i < shoppingCart.length; i++) {
		const price = shoppingCart[i].price
		if (price > max) {
			max = price
		}
	}
	return max
}

console.log('shpping cart motes expensive item:', maxShoppingCart())

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = () => {
	return shoppingCart[shoppingCart.length - 1]
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = x => {
	let n = 0

	while (n <= 3) {
		const random = Math.floor(Math.random() * 10)
		if (random >= x) {
			n++
		}
	}
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const average = (arr = []) => {
	if (!(arr instanceof Array)) return false
	let sum = 0
	arr = arr.filter(item => typeof item === 'number')
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum / arr.length
}
console.log(average([1, 2, 'aa', 3, 5, 'cd']))
console.log(average('test'))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = arr => {
	let max = 0
	let maxI = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > max) {
			max = arr[i]
			maxI = i
		}
	}
	console.log(
		'The longest strin is :"' + arr[maxI] + '" and it\'s length is ' + max + ' charachters'
	)
}
longest[('a', 'aa', 'aaa', 'aaaa')]

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const isNotSpamDummyVersion = (emailContent = '') => {
	emailContent = emailContent.toLocaleLowerCase()
	if (emailContent.search('spam') || emailContent.search('scam')) {
		return false
	}
	return true
}

console.log(isNotSpamDummyVersion('This is not a SpAm email'))
console.log(isNotSpamDummyVersion('This is a normal email'))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const dateDiff = startDate => {
	if (!(startDate instanceof Date)) {
		startDate = new Date(startDate)
	}
	const now = new Date.now()
	return Math.abs(now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) //ms * 1000 => s * 60 => h * 24 => d
}

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 [
	 ['00', '01', '02'],
	 ['10', '11', '12'],
 ]
 */

/* SCRIVI QUI LA TUA RISPOSTA */
const matrixGenerator = (x, y) => {
	const matrix = []
	for (let i = 0; i < y; i++) {
		const row = []
		for (let j = 0; j < x; j++) {
			const element = x[j]
			row.push('' + i + j)
		}
		matrix.push(row)
	}
	return matrix
}
console.log(matrixGenerator(3, 4))
