//4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto
function separarMayorMenor(arreglo) {
    const resultado = {
        mayor: 0,
        menor: arreglo[0]
    };
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > resultado.mayor) {
            resultado.mayor = arreglo[i];
        }
        if (arreglo[i] < resultado.menor) {
            resultado.menor = arreglo[i];
        }
    }
    return resultado;
}
const numeros = [ 7, 8, 3, 10, 23, 5, 1,14];
console.log(numeros);
console.log(separarMayorMenor(numeros));