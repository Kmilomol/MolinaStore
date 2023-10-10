import { services } from "../../services/services.js";

const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=> {

    const img = document.querySelector('#url').value;
    const nombre = document.querySelector('#nombreProducto').value;
    const estado = document.querySelector('#estado').value;
    const calificación = './src/img/estrellas.png';
    const precio = document.querySelector('#precio').value;
    const precioPromo = document.querySelector('#descuento').value;
    
    

    services.crearProducto(img,nombre,estado,calificación,precio,precioPromo)
    .then((respuesta) => {
        console.log(respuesta);      

        window.location.href = '../pages/registar-producto.html'


    }).catch((err) => console.log(err))    

    console.log(nombre, "--", email,"--",password);
})

