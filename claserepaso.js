// Clase de repaso
// Sumatorias
// Recibe un conjunto de números por parámetro
// Retorna la sumatoria de estos números
// Recibir un array de números y retorna un número
// Los parámetros son las variables por donde vamos a recibir información
// Definimos la función y le damos parámetros
function sumatoria (numeros) {
    // Necesitamos acumulador ¿? => Sí, tenemos que sumar todos los números
    // Los acumuladores se declaran e inicializan antes del for
    let resultado = 0;
    // Qué vamos a recorrer ¿? => El array numeros
    for (let i = 0; i < numeros.length; i++) {
        // Tenemos condición ¿? => No, vamos a sumar todos los números
        resultado = resultado + numeros[i];
        // console.log(i, numeros[i], resultado);
    }
    // Después del for retornamos el acumulador
    return "La sumatoria es" + " " + resultado;
}
let unArray = ["a", "b", "c", "d"];
//console.log( unArray.indexOf("a") >= 0);

function contiene(array, numero) {
        if (array.indexOf(numero) >= 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(contiene([1,2,3,4,5], 5));
//console.log(unArray.indexOf("d") );
unArray[0]
// console.log(sumatoria([25,35,50,60]));
// console.log(sumatoria([25,35,50,60, 25,35,50,60]));
/*
Sabiendo esto, escribí una función caloriasDeTrote(), que tome como parámetro X, un
valor numérico que representa la cantidad de vueltas a correr y retorne (no imprime)
 la cantidad de calorías que consumiría.
Por ejemplo:
caloriasDeTrote(2);  // Ejecuto la función con el valor 2 como parámetro
15  // El resultado que nos devuelve la función es 15, ya que teníamos 5 calorías de
la primera vuelta ( 5 * 1 ) sumados a los 10 de la segunda vuelta ( 5 * 2 )
 */
function caloriasDeTrote (cantVueltas) {
    // Necesitamos acumulador ¿? => Sí, las calorías
    let calorias = 0;
    // Qué vamos a recorrer ?¿ => Las vueltas
    for (let vuelta = 1; vuelta <= cantVueltas; vuelta++) {
        // Tenemos condición ¿? => No tenemos condición
        calorias = calorias + vuelta * 5;
    }
    return calorias;
}
//console.log(caloriasDeTrote(4));
/*
saldosDeMesesConGanancia([100, 20, 0, -10, 10])
[100, 20, 10]
Completá la función saldosDeMesesConGanancia. Nuevamente tiene una estructura similar
a los problemas anteriores, pero, ¡no tan rápido!: esta función tiene que devolver un
array.
*/
function saldosDeMesesConGanancia ( saldos ) {
    let ganancias = [];
    for (let i = 0; i < saldos.length; i++) {
        // Tenemos que filtrar los meses con ganancia
        if ( saldos[i] > 0) {
            // Acá tenemos un saldo que es ganancia
            ganancias.push( saldos[i] );
        }
    }
    return ganancias;
}
//console.log(saldosDeMesesConGanancia([10,20,-50,60]))
/*
naipes("espadas")
["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]
Tomá en cuenta que los naipes de la baraja española incluyen todas las numeradas del 1
 al 12, pero para éste ejercicio no queremos incluir los 8 y los 9.
Escribí la función naipes que reciba el tipo de palo como parámetro y devuelva un
array como resultado.
 */
function naipes (palo) {
    let baraja = [];
    for (let numerada = 1; numerada <= 12; numerada++) {
        // Tenemos que filtrar los 8 y 9
        if (numerada !== 8 && numerada !== 9) {
            // Aquí tenemos las numeradas del 1 al 12 sin 8 y 9
            let carta = numerada + " de " + palo;
            baraja.push(carta);
        }
    }
    return baraja;
}
console.log(naipes("Espadas"))
/*
Los árboles utópicos crecen de una forma particular, en dos ciclos:
Cada primavera duplican su tamaño
Cada verano crecen un metro
Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de
alto después de N ciclos?
Algunos ejemplos:
Si N = 0, su altura será 1 metro (no creció nada)
Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
Si N = 2, su altura será de 3 metros (creció un metro más en verano)
Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
y así ...
Escribí la función alturaArbolUtopico, que tome una cantidad de ciclos de crecimiento,
 y devuelva la altura resultante del árbol de Laura.
 */
 function alturaArbolUtopico (cantCiclos) {
     let altura = 1;
     for (let ciclo = 1; ciclo <= cantCiclos; ciclo++) {
        if ( ciclo % 2 === 0) {
            // Estamos en verano
            altura = altura + 1;
        } else {
            // Estamos en primavera
            altura = altura * 2;
        }
     }
     return altura;
 }
//  console.log(alturaArbolUtopico(8));
/*
Necesitamos una función masMenos que reciba un array y devuelva otro con los
siguientes tres números:
En la primera posición, la fracción de números que son positivos
En la segunda posición, la fracción de números que son cero
En la última posición, la fracción de números que son negativos
Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que
hay 50% de positivos, 25% de ceros, y 25% de negativos.
Escribí la función masMenos.
*/
function masMenos (numeros) {
    // Vamos a necesitar 3 contadores
    let positivos = 0;
    let ceros = 0;
    let negativos = 0;
    for (let i =0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos = positivos + 1;
        } else if (numeros[i] === 0) {
            ceros += 1; // es lo mismo que ceros = ceros + 1;
        } else {
            negativos++; // hace lo mismo que negativos = negativos + 1;
        }
    }
    // Acá, se cuantos positivos, negativos y ceros tengo
    return [
        positivos / numeros.length,
        ceros / numeros.length,
        negativos / numeros.length
    ];
}
// console.log(masMenos([1,2,0,0,-5,-1]));
/*
Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se presentan
junto con las rendiciones que veníamos haciendo, por lo cual vamos a necesitar darle
una vuelta de tuerca mas a nuestra función de Sumatorias.
Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos
devuelva el resultado final de la suma de los importes de todos los meses que tienen
ganancia, a excepción de los que superen un importe de $ 1.000
*/
// Recibimos un array con importes
// Retornamos la sumatoria de los importes que cumplan la condición
function sumatoriaBajoImporte (importes) {
    let sumatoria = 0;
    for (let i = 0; i < importes.length; i++) {
        // Tenemos condiciones ¿? => Sí, necesitamos ganancias no mayores a 1000
        if (importes[i] <= 1000 && importes[i] > 0) {
            sumatoria = sumatoria + importes[i];            
        }
    }
    return sumatoria;
}
// console.log(sumatoriaBajoImporte([100,200,3000,-600,1000]))
/*
Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un
conjunto de asientos disponibles y el asiento que quiere ocupar la persona. Nuestra
función deberá verificar si el asiento solicitado se encuentra disponible y
devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:
Ejemplo si se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 15);  
// El resultado debería ser:
"Felicitaciones, el asiento número 15 está disponible"
Ejemplo si no se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 50);  
// El resultado debería ser:
"Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos
disponibles"
*/
// function asientosDisponibles (disponibles, solicitado) {
//     // Recorrer los asientos disponibles para buscar el solicitado
//     for (let i = 0; i < disponibles.length; i++) {
//         if (disponibles[i] === solicitado) {
//             // Encontré el asiento solicitado
//             return "Felicitaciones, el asiento número "+ solicitado +" está disponible";
//         }
//     }
//     // Después del for se que no está el asiento solicitado
//     return "Lo sentimos, el asiento número "+ solicitado +" está ocupado, pero aún quedan "+ disponibles.length +" asientos disponibles"
// }
function asientosDisponibles (disponibles, solicitado) {
    if (disponibles.indexOf(solicitado) !== -1) {
        return "Felicitaciones, el asiento número "+ solicitado +" está disponible";
    } else {
        return "Lo sentimos, el asiento número "+ solicitado +" está ocupado, pero aún quedan "+ disponibles.length +" asientos disponibles"
    }
}
// console.log(asientosDisponibles([15, 28, 44, 45, 70], 45));
/*
Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando
reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos provee los siguientes datos:
El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la
única donde bajan 80 personas y suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan los
 siguientes ejemplos:
 // Si ejecutara la función de ésta manera:
reporteDePasajeros(0);  
// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren']
Otro ejemplo:
  // Si ejecutara la función de ésta manera:
reporteDePasajeros(3);  
// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220
pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren',
'En la estación 3 hay 260 pasajeros arriba del tren']
Otro ejemplo:
  // Si ejecutara la función de ésta manera:
reporteDePasajeros(5);  
// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220
pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren',
'En la estación 3 hay 260 pasajeros arriba del tren',
'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320
 pasajeros arriba del tren']
 */
 function reporteDePasajeros (cantEstaciones) {
    let pasajeros = 200;
    let reportes = [];
    // Recorremos las estaciones desde la 0 hasta cantEstaciones
    for (let estaciones = 0; estaciones <= cantEstaciones; estaciones++) {
        // Tenemos condiciones
        if (estaciones === 5) {
            pasajeros = pasajeros + 120 - 80;
        } else if (estaciones !== 0) {
            pasajeros = pasajeros + 50 - 30;
        }
        reportes.push("En la estación "+ estaciones +" hay "+ pasajeros+" pasajeros arriba del tren");
    }
    return reportes;
 }
// console.log(reporteDePasajeros(5));
// Capicua
// neuquen, rotor, nadan, kayak, menem, 22422
// Recibe una palabra y me dice true o false si es o no capicua
// console.log("Facu"[2])


function capicua (palabra) {
    let reves = "";
    for (let i = palabra.length -1; i >= 0 ; i--) {
        reves = reves + palabra[i];
    }
    return reves === palabra;
}
//console.log(capicua("rotor"))

    

function laClaveSecreta (caracteres){
    let mensaje = "";
    for (let i = caracteres.length -1; i >= 0; i--){
       // Tenemos condiciones?
        if (caracteres[i] !== "*"){
            //acá me demoré en entender que debía llamar el parametro y llamar la variable del cliclo "for" [i]
            mensaje = mensaje + caracteres[i] 
        }
           }
    return mensaje
} 

console.log(laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] ));  
console.log(laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ));  