// Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible
function obtenerUs(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({id:1, nombre:'juan'});
        }, 2000)
    })
}

function obtenerCitas(usuarioid){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(['cita1','cita2']);
        }, 2000)
    })
}

async function MostrarDatos() {
    const usuario = await obtenerUs();
    console.log("usuario",usuario);

    const citas = await obtenerCitas(usuario.id);
    console.log("citas: ",citas);
}

MostrarDatos();