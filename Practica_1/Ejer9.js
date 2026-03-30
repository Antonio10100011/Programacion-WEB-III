//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hola Mundo");
        }, 3000);
    });
}

promesa()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });