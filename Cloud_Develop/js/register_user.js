import { registeruser } from "../js/firebase.js";

const evento = document.getElementById("registerbtn")

async function register(){


    const user= document.getElementById("edtuser");
    const pass= document.getElementById("edtpassword");
    const ConfirmUser= document.getElementById("edtConfirmuser");
    const ConfirmPass= document.getElementById("edtConfirmPass");

    if (user.value === '' || ConfirmUser.value === ''|| pass.value === ''|| ConfirmPass.value=== ''){
        
        alert("Complete todo lo requerido")

    }
    if (user.value != ConfirmUser.value){

        alert("Los usuarios son diferente por favor ingrese el mismo usuario ")

    }if (pass.value != ConfirmPass.value){

        alert("Las contraseñas son diferentes por favor ingrese la misma cotraseña ")

    }if (pass.value.length <5){

        alert("Las contraseñas deben ser de mas de 6 digitos")

    }if(user.value === ConfirmUser.value && pass.value === ConfirmPass.value){

        const user2= document.getElementById("edtuser").value
        const pass2= document.getElementById("edtpassword").value

        const registro = registeruser(user2,pass2)
        const validation= await registro

        if(validation != null){
            alert("el usuario "+user2+" se registro ")
            window.location.href="../index.html"
        }
        else
        {
            console.log("register"+user+"not validation")
            alert("Error de usuario verifique usuario y/o contraseña")
        }

    }
    
    

}

window.addEventListener('DOMContentLoaded', async()=>{

    evento.addEventListener('click',register)

})