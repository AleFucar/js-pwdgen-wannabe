
var username = prompt("Ciao! iniziamo con il tuo nome.") //string

console.log("Ciao " + username) //string

var surname = prompt("Adesso dimmi il tuo cognome") //string

console.log("Ok " + username + " " + surname + " stiamo andando bene!")

var color = prompt("Dimmi adesso il tuo colore preferito") //string

var numero = Math.round(Math.random() * 2000); //int

var password = ("La tua password più (in)sicura per te è " + "\"" + username + surname + color + numero + "\"")

console.log(password)  //string

document.write("<b>" + password + "</b>");



