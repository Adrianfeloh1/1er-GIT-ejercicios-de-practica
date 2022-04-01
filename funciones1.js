
//se agrega parametro(variable) y se le da un valor por defecto como numeroC = 0

function sumar (numerA, numeroB, numeroC = 0){
    return numerA + numeroB + numeroC;
}
console.log (sumar (5,3))
console.log (sumar (25,80,100))

function saludar (nombre, apellido){
    return "hola " + nombre + " " + apellido
}
console.log (saludar("Adrian", "Ochoa"))