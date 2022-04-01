let saludo = ["hola","mundo!"];{


    console.log(saludo);
}
let saludo2 = ["hola","hola!"]
    console.log(saludo2);{
}

let unaVariable = ["a", "b", "c", 1, 2, 3, true, false];
unaVariable[12]= "nuevo dato"
console.log (unaVariable [5])
console.log (unaVariable [7])
console.log (unaVariable)
console.log (unaVariable.length)


let unArray = [1, 2, 3];
let otroArray = [4, 5];

function trasladar(unArray, otroArray) {
let elemento = unArray.pop();
otroArray.push(elemento);
}
trasladar (unArray, otroArray);
console.log(unArray, otroArray);

let array3 = [88,99,100]
let array4 = ["Adrian", "Briton"]

trasladar (array3, array4);
console.log(array3, array4);

