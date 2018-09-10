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
function imprimirNombreEnMayuscula({nombre})
{
  //toUpperCase convierte los caracteres a mayuscula
    console.log(nombre.toUpperCase())
}
//y a acceder a los atributos de nuestros objetos
imprimirNombreEnMayuscula(rafadinho)
imprimirNombreEnMayuscula(jery)
imprimirNombreEnMayuscula({ nombre: 'Pepito' })
imprimirNombreEnMayuscula({ nombre: 'Pepito"' })
