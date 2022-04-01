//Hagamos una función llamada perimetro que nos diga el perímetro de un círculo cuando le damos el radio como parámetro.
//Luego hagamos otra función llamada  area que nos dé el area de un círculo cuando recibe el radio como parámetro.

function perimetro(radio){
    return 3.14 * radio * 2;
}
function area (radio) {
    return 3.14 * radio * radio;
}

console.log(perimetro(10))
console.log(area(10))

//Definí la función sePoneLaOlla, la cual recibe por parámetro el string del día de la semana. 
//Esta función retorna "¡Pongamos la olla, hoy se comen pastas!" si recibe por parámetro el valor "Domingo", 
//caso contrario retornará "Mejor lo dejamos para el domingo".

function sePoneLaOlla(diaDelaSemana){
     if (diaDelaSemana === "Domingo") {
        return "¡Pongamos la olla, hoy se comen pastas!";
} 

else { return "Mejor lo dejamos para el domingo"
    }
}
console.log (sePoneLaOlla("Domingo"))

console.log (sePoneLaOlla("lunes"))


//Definí la función elMayor, la cual debe recibir por parámetro dos números, y como resultado nos devuelva (retorne) el mayor de los dos. 
//Por ejemplo, si la función recibiera 4 y 5 retornaría 5 pues es el mayor, y si pasamos 10 y 4, retornará 10.

function elMayor (numeroA, numeroB){
    if(numeroA >numeroB) {
        return numeroA
        
    } else { 
        return numeroB
    }
}

console.log(elMayor (4,5));


//define la función signo, la cual dado un número, nos retorne solo uno de los siguientes valores:
//1, si el número es positivo
//0, si el número es cero
//-1, si el número es negativo

function signo(unNumero){
    if(unNumero > 0){
            return 1
    } else if (unNumero === 0) 
        {return 0
    } else {
        return -1
    }
}

    console.log(signo(0));


//vamos a definir una función que le ayude a la gente despistada como nosotros a saber si nos conviene ir o no al banco.
//Primero que todo tenemos que saber que un banco está abierto de Lunes a Viernes entre las 10 y las 15 horas.
// ejemplo: puedoIrAlBanco('Lunes', 11);
// true, dado que es un día laboral y está dentro del horario de atención de los bancos (entre las 10 y las 15). 
//puedoIrAlBanco('Martes', 18);
// false, dado que es un día laboral pero no está dentro del horario de atención de los bancos (entre las 10 y las 15).
//puedoIrAlBanco('Sábado', 14);
// false, dado que si bien el  horario está dentro del horario de atención de los bancos no es un día laboral.

function puedoIrAlBanco(diaDelaSemana, horario){
   
    if((diaDelaSemana=="Lunes" || diaDelaSemana== "Martes" || diaDelaSemana== "Miercoles" || diaDelaSemana== "Jueves" || diaDelaSemana== "Viernes" ) 
    && (horario >=10 && horario < 15) ){
        return true;
    }    else    { 
        return false;
    }
}

//console.log(puedoIrAlBanco("Miercoles",14));


//Escribí la función puedeJubilarse que recibe por parámetro la edad, el género y además,
 //los años de aportes jubilatorios (en ese orden) que posee una persona, ejemplo:

 //puedeJubilarse(62, 'F', 34);
// Ésto da como resultado true ya que cumple con las tres condiciones. 

//Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") es de 60 años, 
//mientras que para los hombres (género "M") es 65. En ambos casos, 
//se deben contar con al menos 30 años de aportes jubilatorios.

function puedeJubilarse(edad, genero, aniosAporte) {
    if (edad >= 60 && genero=== "F" && aniosAporte >= 30) {
return true;
    } else if (edad >= 65 && genero=== "M" && aniosAporte >= 30){
        return true;
    } else {
        return false;
    }
    }
    console.log(puedeJubilarse (67,"F", 32))


    function trasladar(unArray, otroArray) {
        let elemento = unArray.pop();
        otroArray.push(elemento);
        }
        
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
            
            let numeros = [1, 6, 7, 6]

            console.log(numeros [2]);

         //FUNCION for (ciclos)

         for (let vuelta = 0; vuelta >= 10; vuelta++){
                console.log("vuelta hasta 10" + vuelta);
         }
                console.log("despues del for");

                //vamos al parque de diversiones

            function puedeSubirse (alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
                if ((alturaPersona >= 1.5 || alturaPersona >= 1.2 && vieneConCompania ) && (tieneAfeccionCardiaca === false)){
                    return true
                } else {
                    return false
                }
            }

            console.log (puedeSubirse (1.2, true, false))

            //TE VAMOS A DAR UN PREMIO
            //el jurado de un torneo de programación, nos pidió que desarrollemos la función medallaSegunPuesto, 
            //la cual retorne la medalla que le corresponde a los primeros puestos, según la siguiente lógica: 
            //Primer puesto: le corresponde "Oro" 
            //Segundo puesto: le corresponde "Plata" 
            //Tercer puesto: le corresponde "Bronce" 
            //Otros puestos: le corresponde "Seguí participando"

            function medallaSegunPuesto (medallaSegunPuesto){
                if (medallaSegunPuesto === 1){
                    return "Oro";
                } else if (medallaSegunPuesto === 2) {
                    return "Plata";
                } else if (medallaSegunPuesto === 3) {
                    return "Bronce";
                } else {
                    return "Seguí participando"
                }
            }
                console.log(medallaSegunPuesto (3));

            // EJERCICIOS ARRAYS

            let peliculas = ["batman", "superman", "avengers", "theRevenant"];
                peliculas.push ("inception");
                peliculas.push ("the matrix", "Casino Royal");

                let ultimaPelicula = peliculas.pop();

                let ubicacionPelicula = peliculas.indexOf("inception");
                let peliculaNoUbicada = peliculas.indexOf(8);
                           
                console.log (peliculas); 
                console.log (ultimaPelicula) 
                console.log (ubicacionPelicula);
                console.log (peliculaNoUbicada);          
         


                
