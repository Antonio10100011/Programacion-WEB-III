//5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés).
function palindromo(palabra){
    let invertido=""

    for(let i=palabra.length-1; i>=0; i--){
        invertido += palabra[i];
    }

    return palabra == invertido;
}
var palabra="hola";
console.log(palindromo(palabra));