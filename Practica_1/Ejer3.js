//3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares:
function separarParesImpares(arreglo) {
    const resultado = {
        pares: [],
        impares: []
    };
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            resultado.pares.push(arreglo[i]);
        } else {
            resultado.impares.push(arreglo[i]);
        }
    }
    return resultado;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
console.log(separarParesImpares(numeros));
