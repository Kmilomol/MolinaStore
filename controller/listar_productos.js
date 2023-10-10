import { services } from '../services/services.js'


const API = 'http://localhost:3000/productos'

const getData = (url) => {
  fetch(url)
    .then((reponse) => reponse.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

};

const fillData = (data) => {
  let cardHtml = "";
  data.forEach(({ img, nombre, estado, calificación, precio, precioPromo, id }) => {

    cardHtml += '<div class="card">';
    cardHtml += `<a href="./src/pages/productDetail.html" target="_blank">
      <img
          src="${img}"></a>`;
    cardHtml += `<div class="info-card">`;
    cardHtml += `<h4>${nombre}</h4>`;
    cardHtml += `<p>${estado}</p>`;
    cardHtml += `<img src="./src/img/estrellas.png">`;
    cardHtml += `<div class="card__info--price">`;
    cardHtml += ` <span class=" ">${precio}</span>`;
    cardHtml += `<p class="precio">${precioPromo}</p>`;
    cardHtml += '</div>';
    cardHtml += `<button href="#" class="u-full-width btn-primary input agregar-carrito" data-id="${id}">Agregar
    Al Carrito</button>`;
    cardHtml += '</div>';
    cardHtml += '</div>';
    
  });  
  document.getElementById('card').innerHTML = cardHtml

};

getData(API)

console.log(fillData);

// Obtener el nombre del usuario del almacenamiento local
const nombreUsuario = localStorage.getItem('nombreUsuario');
if (nombreUsuario) {
    // Mostrar el nombre del usuario en el elemento welcome--name
    
    document.querySelector('.welcome').classList.remove('welcome') 
    document.querySelector('.welcome--name').textContent = nombreUsuario;
    

}


const usuarioAdmin = localStorage.getItem('nombreUsuario');
    if (usuarioAdmin === 'admin') {
      document.querySelector('.Agregar').classList.remove('Agregar')
    }