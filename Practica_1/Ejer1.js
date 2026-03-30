//1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto.
function contarVocales(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const resultado = [0,0,0,0,0];
    
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (vocales.includes(letra)) {
            const indice = vocales.indexOf(letra);
            resultado[indice]++;
        }
    }

    return resultado;
}
const texto = "Hola, ¿cómo estás?";
console.log(texto);
console.log("a, e, i, o, u");
console.log(contarVocales(texto));