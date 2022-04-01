//DEFINICION FUNCION DECLARADA

function sumar (a, b, c) {
    return a + b + c;
}
// INVOCACION
let resultadoSuma = (10, 50, 200);
console.log(sumar (10, 50, 200))

function saludar (nombre = "por defecto", apellido = "anonimo") { 
return " hola " + nombre + " " + apellido;
}

console.log (saludar ("Adrian", "Ochoa"))

//funcion expresada

let restar = function(numeroC, numeroD) {
    return numeroC - numeroD;
}
console.log(restar(150,26))

//FUNCION EXPRESADA PRUEBA PARA MULTIPLICAR

let multiplicar = function (numero4, numero5) {
    return numero4 * numero5;
    }
console.log (multiplicar (30,48))


//función que nos retorna true si un número es mayor a 5, o false en caso contrario:

function esMayor (unNumero){
    if (unNumero > 5){
        return true;
    
    } else 
    return false;

} 
