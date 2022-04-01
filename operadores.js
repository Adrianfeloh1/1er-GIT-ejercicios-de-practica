//Operadores lógicos
//AND && Conjunción Lógica
/**
 * true && true => true
 * true && false => false
 * false && false => false
 */
numero = 10;
console.log(numero < 15 && numero > 9);

//OR o disyunción lógica ||
/**
 * true || true => true
 * true || false => true
 * false || false => false
 */
numero = 25;
console.log(numero > 20 || numero < 30);

//NOT Negación !
/**
 * true => false
 * false => true
 */
let dia = "sabado"
console.log(! (dia === "sabado")); //false