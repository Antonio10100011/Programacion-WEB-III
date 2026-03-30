//15. Proporcione un ejemplo para convertir un callback en una promesa.
function ObtenerNum(callback){
    setTimeout(()=>{
        const numero = 5;
        callback(numero);
    }, 5000);
};

function ObtenerNumPromesa(){
    return new Promise((resolve) => {
        ObtenerNum((numero) => {
            resolve(numero);
        });
    });
}
ObtenerNumPromesa()
    .then((numero) => {
        console.log("numero: "+ numero);
        const resultado = numero * 2;
        console.log("multiplicado", resultado);
        const res_final = resultado + 10;
        console.log("resultado final es:"+ res_final);
    })
    .catch((error) => {
        console.log("error: ", error);
    });
