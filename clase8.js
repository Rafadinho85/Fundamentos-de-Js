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
alert("hola")
//asignar objetos a parametros de funciones
function imprimirNombreEnMayuscula(persona)
{
  //  var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase())

}

imprimirNombreEnMayuscula(rafadinho)
imprimirNombreEnMayuscula(jery)

function cumpleaños(persona){
  persona.edad += 1
}
