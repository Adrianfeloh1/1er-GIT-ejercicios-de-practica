
//ejemplo de funcion con arrays retornando cada posicion del array
//function sumatoria (arrayNumeros){
    //return arrayNumeros[0] + arrayNumeros[1] + arrayNumeros[2] + arrayNumeros[3];}

//console.log (sumatoria ([10,20,30,40]))


//ejemplo de funcion for con arrays
function sumatoria (arrayNumeros){
    let resultado = 0;
    for(let indice = 0; indice < arrayNumeros.length; indice ++){
        resultado = resultado + arrayNumeros [indice];
    }
    return resultado; //se retorna despues del for
}
console.log (sumatoria ([10,20,30,40,25,50,25]))