//aprendimos a declarar objetos y asignar sus atributos
var rafadinho =
{//clave y valor
nombre: 'Rafadinho',
apellido: 'Ramirez',
edad: 28
}
var jery = {
  nombre: 'Jery',
  apellido: 'Teo',
  edad: 27
}
//asignar objetos a parametros de funciones
function imprimirNombreEnMayuscula({persona})
{
  //var nombre = persona.nombre
  //var {nombre} = persona
  //console.log(nombre.toUpperCase())

}

var rafa =
{//clave y valor
nombre: 'Rafadinho',
apellido: 'Ramirez',
edad: 22
}
var Jennifer = {
  nombre: 'Jeny',
  apellido: 'Mejia',
  edad: 24
}

function imprimirNombreYEdad (persona){

var{nombre} = persona
var{edad} = persona
  console.log("Hello, my name is " + nombre + " and my age is " +
     edad);

}

imprimirNombreYEdad(Jennifer)
