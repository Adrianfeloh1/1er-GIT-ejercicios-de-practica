function caloriasDeTrote (cantidadVueltas){
    let cantCalorias = 0
        for (let vueltas = 1; vueltas <= cantidadVueltas; vueltas ++){
            cantCalorias = cantCalorias + vueltas * 5;
        }
        return cantCalorias
    }
    
    console.log (caloriasDeTrote (2))


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
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]))

    //saldos de meses con ganancia


    // juego de naipes


    // arbolutopico


    


