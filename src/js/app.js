// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarProducto);

     // Cuando se elimina un producto del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}




// Funciones
// Función que añade el producto al carrito
function agregarProducto(e) {
     if (!e.target.classList.contains('agregar-carrito')) {
          return;
      }
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;
          // Enviamos el producto seleccionado para tomar sus datos          
          leerDatosProducto(producto);
     }
}

// Lee los datos del producto
function leerDatosProducto(producto) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('h4').textContent,
          precio: producto.querySelector('.card__info--price span').textContent,
          id: producto.querySelector('button').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
          const productos = articulosCarrito.map( producto => {
               if( producto.id === infoProducto.id ) {
                    producto.cantidad++;
                     return producto;
                } else {
                     return producto;
             }
          })
          articulosCarrito = [...productos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }

     // console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el producto del carrito en el DOM
function eliminarProducto(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-producto') ) {
          // e.target.parentElement.parentElement.remove();
          const productoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

          carritoHTML();
     }
}


// Muestra el producto seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(producto => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${producto.imagen}" width=100>
               </td>
               <td>${producto.titulo}</td>
               <td>${producto.precio}</td>
               <td>${producto.cantidad} </td>
               <td>
                    <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

// Elimina los Productos del carrito en el DOM
function vaciarCarrito() {
     
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}