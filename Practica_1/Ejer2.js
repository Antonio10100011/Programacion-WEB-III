//2. Crear una función que invierta el orden de las palabras en una frase
//Primero Invirtiendo Palabras
function invertirPalabras(frase) {
    return frase.split(' ').reverse().join(' ');
}
const frase = "Hola soy Juan Perez";
console.log(frase);
console.log(invertirPalabras(frase));
//Segundo Invirtiendo Caracteres
function invertirCaracteres(frase) {
    return frase.split('').reverse().join('').split(' ').reverse().join(' ');
}
console.log(invertirCaracteres(frase));
