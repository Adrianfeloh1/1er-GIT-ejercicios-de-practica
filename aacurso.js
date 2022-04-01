let saludo = ["hola","mundo!"]

//console.log(saludo);

let numeros = [1, 6, 7, 6]

    //console.log(numeros [0]);


    
//Escribí la función contiene que recibe como parámetros un array y un número. Ésta función deberá retornar un booleano (true)
//que nos diga si el número que tenemos como parámetro se encuentra dentro del array o el otro booleano en el caso contrario (false).
    
function contiene (array, numero){
        if (array.indexOf(numero) >=0 ){
            return true;
        }else {
            return false;
        }
    }
        //console.log(contiene([1,2,3,4,8,10,50,78,22,55,68],8));


//Si le pedís un elemento en una posición que iguala o excede al tamaño del array, vas a obtener undefined. No parece algo terrible,
// pero el problema es que con undefined no podés hacer nada realmente útil. Así que la recomendación es: ¡no te pases de índice!

//Teniendo ésto en cuenta, va un desafío: escribí nuevamente la función medallaSegunPuesto,
//(si no la recordás la podés volver a ver en el ejercicio "Te vamos a dar un premio!" de la clase de Condicionales) 
//pero esta vez usando como máximo un sólo if. Quizás los arrays te pueden ser útiles acá.

function medallaSegunPuesto (puesto){
    if (puesto === 1){
        return "ORO"
    }else if (puesto === 2){
        return "PLATA"
        
    }else if (puesto === 3){
        return "BRONCE"
        
    }else {
        return "SEGUÍ PARTICIPANDO"
    }
}
    //console.log(medallaSegunPuesto(8));
//Por las dudas te recordamos que la función tiene que devolver la medalla que le corresponde a los primeros puestos de una competencia.
// por ejemplo:

function medallaSegunPuesto1 (arrayPuestos, numeroLLegada){
    if (arrayPuestos.indexOf(numeroLLegada) >=0 || arrayPuestos.indexOf(numeroLLegada) == 1 == "oro"){
        
    }
}

console.log(medallaSegunPuesto1([1,2,3,4,5],1));

medallaSegunPuesto(1)
"Oro"
medallaSegunPuesto(2)
"Plata"
medallaSegunPuesto(3)
"Bronce"
medallaSegunPuesto(4)
"Seguí participando"
medallaSegunPuesto(5)
"Seguí participando"