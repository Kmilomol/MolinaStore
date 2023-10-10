//CRUD - Métodos HTTP
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE



// Fetch API
const listaProductos = () => {
    return fetch('http://localhost:3000/productos').then(respuesta =>{
        return respuesta.json()
    })
}




const crearUsuario = (nombre,email,password) => {
    
    return fetch('http://localhost:3000/usuarios', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre,email,password,id:uuid.v4()})
    }).catch((error) =>{
      console.log(error);
  })
}

const crearProducto = (img,nombre,estado,calificación,precio,precioPromo) => {
    
    return fetch('http://localhost:3000/productos', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({img,nombre,estado,calificación,precio,precioPromo,id:uuid.v4()})
    }).catch((error) =>{
        console.log(error);
    })
}




export const services =  {
    listaProductos,
    crearUsuario,
    crearProducto
    
    
}