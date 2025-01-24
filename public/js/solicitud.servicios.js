

const inputs = {
    nombreInput: document.getElementById('nombreInput'),
    empresaInput: document.getElementById('empresaInput'),
    telefonoInput: document.getElementById('telefonoInput'),
    emailInput: document.getElementById('emailInput'),
    formSoluciones: document.getElementById('formSoluciones'),
    mensajeInput: document.getElementById('mensajeInput'),
    btnEnviar:document.getElementById('btnEnviar')
}


// Itera a través de los elementos de radio y agrega un evento para manejar los cambios
function obtenerRadio() {
    const radioButtons = document.getElementsByName("solucion");
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {

            return radioButtons[i].value;

        }
    }

    return null; // Devuelve null si ningún radio está selecciona 
}



async function enviarSolicitud(newData) {
    try {
        inputs.btnEnviar.disabled = true
        const url = getUrl('solicitud-servicios/create')
        const data = await fetch(url, {
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify(newData),
            headers
        })
        const response = await data.json()
        if (response.estado) {
            inputs.formSoluciones.reset()
            Swal.fire({
                title: '',
                text: response.msg,
                confirmButtonText: 'Ok',
                icon: 'success',
                confirmButtonColor: '#314c53',
            })
            inputs.btnEnviar.disabled = false
            return
        }
        Swal.fire({
            title: '',
            text: response.msg,
            confirmButtonText: 'Ok',
            icon: 'warning',
            confirmButtonColor: '#314c53',
        })
        inputs.btnEnviar.disabled = false
        return 
    
    } catch (error) {

    }
}
inputs.formSoluciones.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    if(inputs.mensajeInput.value.length >= 700){
        return Swal.fire({
            title: '',
            text: 'Este mensaje tiene un límite máximo de 700 caracteres. Por favor, asegúrate que no exceda este límite. Gracias.',
            confirmButtonText: 'Ok',
            icon: 'warning',
            confirmButtonColor: '#314c53',
        })
    }
    const data = {

        NombreApellido: inputs.nombreInput.value,
        NombreEmpresa: inputs.empresaInput.value,
        Telefono: inputs.telefonoInput.value,
        CorreoElectronico: inputs.emailInput.value,
        Soluciones: obtenerRadio(),
        Mensaje: inputs.mensajeInput.value,

    }
    console.log(data)

   //return await enviarSolicitud(data)
})