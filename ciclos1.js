//Ciclos - for
// Es para ejecutar un código varias veces
// Sirve para optimizar el código
// Para hacer una tarea de forma repetitiva o automatizada
// Tiene 3 sentencias, inicial, condición y la modificadora
// En algún momento tiene que parar
// Inicializadora, creamos una variable y le damos un valor inicial
// Condición, me define cuantas iteraciones voy a dar, mientras se cumpla se sigue ejecutando el for
// Modificadora, indicamos cómo queremos que se vaya modificando la variable para que se deje de cumplir el for
for (let vuelta = 0; vuelta <= 100; vuelta = vuelta+5) {
//console.log("Estamos dando la vuelta " + vuelta);
}
//console.log("Después del for");


function laClaveSecreta (caracteres){
    let mensaje = "";
    for (let i = caracteres.length -1; i >= 0; i--){
       // Tenemos condiciones?
        if (caracteres[i] !== "*"){
            mensaje = mensaje + caracteres[i] 
        }
           }
    return mensaje
} 

console.log(laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));
