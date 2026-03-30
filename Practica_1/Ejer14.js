// 14. Proporcione un ejemplo para convertir una promesa en un callback
function ObtenerNum(callback){
    setTimeout(()=>{
        const numero = 5;
        callback(numero);
    }, 5000);
};
ObtenerNum((numero) => {
    console.log("numero: "+ numero);
    const resultado = numero * 2;
    console.log("multiplicado", resultado);
    const res_final = resultado + 10;
    console.log("resultado final es:"+ res_final);
});

