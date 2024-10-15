function repetidos(arr) {
    
    const conteo = {};

  
    for (const num of arr) {
        conteo[num] = (conteo[num] || 0) + 1;
    }

    
    const resultado = [];
    const numerosProcesados = new Set(); 

    for (const num of arr) {
        if (!numerosProcesados.has(num)) { 
            resultado.push(conteo[num]);
            numerosProcesados.add(num); 
        }
    }

    return resultado;
}


console.log(repetidos([2, 3, 2, 2])); 
console.log(repetidos([1, 1, 1]));    
console.log(repetidos([2, 3, 3, 2])); 
