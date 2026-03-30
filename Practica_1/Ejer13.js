//13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.
function ObtenerNum(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(5);
        }, 5000);
    });
};

async function MostrarResultado() {
    try {
        const numero = await ObtenerNum();
        console.log("numero: "+ numero);
        const resultado = numero * 2;
        console.log("multiplicado", resultado);
        const res_final = resultado + 10;
        console.log("resultado final es:"+ res_final);
    } catch (error) {
        console.log("error: ", error);
    }
}

MostrarResultado();