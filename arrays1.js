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




let numerosDeLoteria = [22,40,12]

console.log (numerosDeLoteria.length);
console.log([].length);
console.log ([4, 3].length);

//.PUSH()

let pertenencias = [ "espada" , "escudo" , "antorcha" ];
 console.log (pertenencias)

 pertenencias.push ("ballesta");
console.log (pertenencias)

//FUNCION TRASLADAR

let unArray = [1, 2, 3];
let otroArray = [4, 5];

function trasladar(unArray, otroArray) {
let elemento = unArray.pop();
otroArray.push(elemento);
}
console.log(trasladar)

//FUNCION CONTIENE .INDEXOF()

function contiene (unArray, unNumero){
    if (unArray.indexOf(unNumero)>=0){
        return true;
    } else{
        return false;
    }
    }
    console.log(contiene([1, 6, 7, 6], 7))
    
    console.log(contiene([1, 6, 7, 6], 6))

    console.log(contiene([], 7))

    console.log(contiene([8, 5], 7))