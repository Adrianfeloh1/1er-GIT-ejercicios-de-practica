// indiceDe
// Recibe un array y un elemento buscado. y retorna las posiciones donde se encuentre ese elemnto
// Qué recibe la función ¿? => un array y un elemento buscado
// Qué retorna la función ¿? => Las posiciones donde encontré elemento buscado (array de números)
// Declaramos la función y colocamos los parámetros
function indiceDe (unArray, elementoBuscado) {
    // Necesitamos un acumulador ¿? => Sí, para retornar el array de posiciones
    let posiciones = []; // se declara antes del for y se le da valor incial
    // Qué recorremos ¿? => unArray (mi parámetro)
    for (let i = 0; i < unArray.length; i++) {
        // Tenemos condiciones ¿? => Sí, tenemos que buscar el elemento buscado
        if ( elementoBuscado === unArray[i] ) { // filtrar
            // Acá encontre el elemento buscado en la posición i
            posiciones.push(i);
        }
    }
    // Después del for retornamos
    return posiciones;
}
console.log(indiceDe([1,2,3,4,2,3,4,5,2,6,8,7,5,43,3,2,4,2], 5));
let resultadoIndiceDe = indiceDe([1,2,3,4,2,3,4,5,2,6,8,7,5,43,3,2,4,2], 5);
console.log(resultadoIndiceDe.length);