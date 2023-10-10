import { services } from "../../services/services.js";

const btn = document.querySelector('#button')

btn.addEventListener('click', ()=> {

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    

    services.crearUsuario(nombre,email,password)
    .then((respuesta) => {
        console.log(respuesta);      

        window.location.href = '../pages/login.html'


    }).catch((err) => console.log(err))    

    console.log(nombre, "--", email,"--",password);
})

