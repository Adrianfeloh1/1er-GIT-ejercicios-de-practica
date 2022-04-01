function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}


//console.log( gananciaTotal([]))
//console.log(gananciaTotal([100]))
//console.log(gananciaTotal([100, 2]))
//console.log(gananciaTotal([2, 10, -20]))
//console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]))

//"Ah, pero esto no termina acá" - dijo Ana - "Quiero saber en cuántos meses hubo ganancia, es decir, que el saldo fue mayor a cero".
//Completá la función cantidadDeMesesConGanancia. 
//En esta oportunidad deberás de utilizar el for y si prestás atención notarás que tiene una estructura similar al problema anterior 

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if (mesConGanancia = unPeriodo[i] > 0) {
      cantidad = cantidad + mesConGanancia
      }
    }
    return cantidad;
  }
  
//console.log(cantidadDeMesesConGanancia([]))
//console.log(cantidadDeMesesConGanancia([100]))
//console.log(cantidadDeMesesConGanancia([100, 2]))
//console.log(cantidadDeMesesConGanancia([2, 10, -20]))
//console.log(cantidadDeMesesConGanancia([2, 10, -20, 0, 0, 10, 10]))


//Resulta que cuando hay que presentar ganancias mayores a $ 1.000
//no se presentan junto con las rendiciones que veníamos haciendo,
//por lo cual vamos a necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.

//Escribí la función sumatoriaBajoImporte la cual recibiendo un array
//con importes nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia,
// a excepción de los que superen un importe de $ 1.000


function sumatoriaBajoImporte (importes){
    let resultado = 0
    for (let indice = 0; indice < importes.length; indice++){
        if (importes[indice] >0 && importes[indice] <=1000) {
            resultado = resultado + importes[indice]
                }
    }
    return resultado;
    }
    //console.log (sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]))

    //La función sumatoriaBajoImporte ejecutada con los meses 
    //[300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000] debería darnos como resultado 3300


    //Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles
    //y el asiento que quiere ocupar la persona. Nuestra función deberá verificar si el asiento solicitado se encuentra disponible
    // y devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:
//Ejemplo si se encuentra el asiento disponible
//asientosDisponibles([15, 28, 44, 45, 70], 15);  
// El resultado debería ser:
//"Felicitaciones, el asiento número 15 está disponible"

function asientosDisponibles (arrayDeAsientos, numeroDeAsiento){
    if(arrayDeAsientos.indexOf(numeroDeAsiento) >= 0){
        return ("Felicitaciones, el asiento número " +numeroDeAsiento+ " está disponible")
    }else{
        return ("Lo sentimos, el asiento número " +numeroDeAsiento+ " está ocupado, pero aún quedan "+arrayDeAsientos.length+ " asientos disponibles")
    }
}
console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
//console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
//console.log(asientosDisponibles([3,15,18,25], 25));
//console.log(asientosDisponibles([3,15,18,25], 18)); 

//ULTIMO EJERCICIOS REPORTE DE PASAJEROS //la empresa necesita saber cuantos pasajeros lleva luego de la parada en cada estación.
//Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones 
//que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. 
//La empresa nos provee los siguientes datos:

//El tren sale de la estación terminal siempre con 200 pasajeros.
//En cada estación el tren sube 50 pasajeros y se bajan 30.
//En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.
//ejemplos:
//// Si ejecutara la función de ésta manera:
//reporteDePasajeros(0);  

// La función me retornaría lo siguiente:
//['En la estación 0 hay 200 pasajeros arriba del tren']

// Si ejecutara la función de ésta manera:
//reporteDePasajeros(3);  

// La función me retornaría lo siguiente:
//['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 
//'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren']

// Si ejecutara la función de ésta manera:
//reporteDePasajeros(5);  

// La función me retornaría lo siguiente:
//['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 
//'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren',
//'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren']








