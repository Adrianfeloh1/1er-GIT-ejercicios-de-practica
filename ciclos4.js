// Sumatoria
// Recibe un conjunto de números y me retorna la suma de esos números
// Qué recibe mi función ¿? =>
// Un array con números
// Qué vamos a retornar ¿? =>
// La suma que va a ser un número
// resultado = resultado +  arrayNumeros[0];
// resultado = resultado +  arrayNumeros[1];
// resultado = resultado +  arrayNumeros[2];
// resultado = resultado +  arrayNumeros[3];
// Arrays y ciclos
// Declarar la función y colocar los parámetros
function sumatoria (arrayNumeros) {
    // Acumulador porque me va a ir sumando en el for
    // Se declara antes del for y se le da un valor incial
    let resultado = 0;
    // Recorremos el arrayNumeros
    for (let indice = 0; indice < arrayNumeros.length; indice++) {
        resultado = resultado + arrayNumeros[indice]; // Se usa dentro del for
        console.log(indice, arrayNumeros[indice], resultado);
    }
    return resultado; // Se retorna después del for
}
console.log(sumatoria([10,20,30,40, 150, 200,300]))