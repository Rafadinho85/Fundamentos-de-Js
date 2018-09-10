var nombre = "Jery" //si una variable esta fuera
//de cualquier funcion es una variable global
//la cual se puede acceder de cualquier funcion que tengamos
//se le asigna al objeto global.


function imprimirNombreEnMayuscula(nom)
{
  //toUpperCase convierte los caracteres a mayuscula
    nom = nombre.toUpperCase()
    console.log(nom);
}

imprimirNombreEnMayuscula(nombre)

console.log(nombre)
