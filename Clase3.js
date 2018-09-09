var edad = 27;

edad += 1

var peso = 198

peso = peso - 5

var sandwich = 3

peso = peso + sandwich

var jugarAlfutbol = 10

peso -= jugarAlfutbol

var precioDeVino = 300.3
//modulo global de javascript
//funcion que me permite redondear un numero
//
var total = Math.round(precioDeVino * 100 * 3) / 100
var total1 = Math.round(precioDeVino * 3)
//funcion que nos permite mostrar los decimales que queramos
var totalStr = total.toFixed(3)
//parseFloat nos permite convertir un string a float
var totalDec = parseFloat(totalStr)

var pizza = 8;
var persona = 2;

var cantidadPorciones = pizza / persona
