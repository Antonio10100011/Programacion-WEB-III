//8. Realizar un código para ejecutar una función callback después 2 segundos
function saludar(callback) {
    setTimeout(() => {
        callback("Hola Mundo");
    }, 2000);
}

saludar((mensaje) => {
    console.log(mensaje);
});

