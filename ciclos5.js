// SumatoriaPar
function sumatoriaPar (arrayNumeros) {
    // Acumulador
    // Se declara antes del for y se le da un valor incial
    let resultado = 0;
    // Recorremos el arrayNumeros
    for (let i = 0; i < arrayNumeros.length; i++) {
        // Tenemos una condición ¿? => Sí, queremos solo los pares
        if ( arrayNumeros[i] % 2 === 0) {
            resultado = resultado + arrayNumeros[i]; // Se usa dentro del for
        }
        // console.log(i, arrayNumeros[i], resultado);
    }
    return resultado; // Se retorna después del for
}
console.log(sumatoriaPar([11,20,35,49, 151, 200,300]))