import { Loginvalidation } from "../js/firebase.js";

const evento = document.getElementById("loginbtn")

async function login(){


    const user= document.getElementById("edtuser").value
    const pass= document.getElementById("edtpassword").value

    const sesion = Loginvalidation(user,pass)
    const validation= await sesion

    if(validation != null){
        alert("user authentication"+user)
        window.location.href="../plantillas/home.html"
    }
    else
    {
        console.log("Sesion"+user+"not validation")
        alert("Error de usuario verifique usuario y/o contraseña")
    }

}

window.addEventListener('DOMContentLoaded', async()=>{

    evento.addEventListener('click',login)

})