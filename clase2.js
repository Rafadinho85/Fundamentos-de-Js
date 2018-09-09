//definiendo variables
var nombre = "shakira", apellido = "Recinos"
//todas las letras mayusculas
var nombreEnMayusculas = nombre.toUpperCase()
//todas las letras en minusculas
var apellidoEnMinusculas = apellido.toLowerCase()
//obtener una letra de un string
var primeraLetraNombre = nombre.charAt(0)
//obtener tamaño
var cantidadDeLetrasDelNombre = nombre.length
//concatenar string
var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.charAt(1) + nombre.charAt(2)
//metodo que nos ayuda a escoger un rango de caracteres
var str2 = nombre.substr (0,3)

var miNombre = "Jery"
var miUltimaLetra = miNombre.charAt(3)
console.log(miUltimaLetra);
