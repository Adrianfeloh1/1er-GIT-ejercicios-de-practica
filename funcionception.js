function sumar(numero1, numero2) {
   return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
   let resultadoDeSuma = sumar(numero3, numero4);
   return triple(resultadoDeSuma);
}


function contiene (unArray, unNumero){
   if (unArray.indexOf (unNumero)>=0){
      return true;
   } else {
      return false;
   }
}
console.log(contiene([1, 6, 7, 6], 7));

console.log(contiene([1, 6, 7, 6], 6))

console.log(contiene([], 7))

console.log(contiene([8, 5], 7))
