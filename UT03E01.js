function repetidos(arr) {
    // Crear un objeto para almacenar la cuenta de cada número
    const conteo = {};

    // Contar la frecuencia de cada elemento
    for (const num of arr) {
        conteo[num] = (conteo[num] || 0) + 1;
    }

    // Generar el array de salida con las repeticiones en el orden de aparición
    const resultado = [];
    const numerosProcesados = new Set(); // Usamos un conjunto para llevar la cuenta de los números que ya procesamos

    for (const num of arr) {
        if (!numerosProcesados.has(num)) { // Verificamos si el número ya fue procesado
            resultado.push(conteo[num]);
            numerosProcesados.add(num); // Lo marcamos como procesado
        }
    }

    return resultado;
}

// Ejemplos de uso
console.log(repetidos([2, 3, 2, 2])); // [3, 1]
console.log(repetidos([1, 1, 1]));    // [3]
console.log(repetidos([2, 3, 3, 2])); // [2, 2]
