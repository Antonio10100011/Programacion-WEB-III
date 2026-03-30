//proporciona un ejemplo concreto de encademiento de promesas
function ObtenerNum(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(5);
        }, 5000);
    });
};

ObtenerNum()
    .then((numero) =>{
        console.log("numero: "+ numero);
        return numero*2
    })
    .then((resultado) =>{
        console.log("multiplicado",resultado)
        return resultado+10
    })
    .then((res_final)=>{
        console.log("resultado final es:"+ res_final);
    })
    .catch((error)=>{
        console.log("error: ", error);
    });
