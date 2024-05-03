let itemsPerPage = 15;
let currentPage = 1;

function showProducts() {
  const productList = document.getElementById('contenedorlibros');
  productList.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentProducts = libros.slice(startIndex, endIndex);

  currentProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}">
      <h3>${product.titulo}</h3>
      <p>Autor: ${product.autor}</p>
      <p>Género: ${product.genero}</p>
      <p>Codigo: ${product.codigo}</p>
      <p>Editorial: ${product.editorial}</p>
      <p>Precio: ${product.precio}</p>
      <p>Año de publicación: ${product.publicacion}</p>
    `;
    productList.appendChild(productCard);
  });

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const currentPageDisplay = document.getElementById('current-page');

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = endIndex >= libros.length;

  currentPageDisplay.textContent = `Página ${currentPage} de ${Math.ceil(libros.length / itemsPerPage)}`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showProducts();
  }
}

function nextPage() {
  const maxPage = Math.ceil(libros.length / itemsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    showProducts();
  }
}

function adjustPaginationByWindowSize() {
  const winWidth = window.innerWidth;
  if (winWidth > 1600) { itemsPerPage = 15; }
  else if (winWidth > 1230) { itemsPerPage = 12; }
  else if (winWidth > 980) { itemsPerPage = 10; }
  else if (winWidth > 750) { itemsPerPage = 8; }
  else if (winWidth > 510) { itemsPerPage = 6; }
  else { itemsPerPage = 4; }
  showProducts(); 
}

window.onload = adjustPaginationByWindowSize;
window.onresize = adjustPaginationByWindowSize;

let slider = document.querySelector(".slider-carrusel");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
  width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
  slides();
},intervalo);

function slides(){
  slider.style.transition = "transform .8s";
  slider.style.transform = "translate("+(-width*contador)+"px)";
  contador++;

  if(contador == sliderIndividual.length){
    setTimeout(function(){
      slider.style.transform = "translate(0px)";
      slider.style.transition =  "transform 0s";
      contador = 1;
    },1500);
  }
}

document.getElementById('registerBtn').addEventListener('click', function() {
  window.location.href = 'Registro.html';
});

document.getElementById('searchBtn').addEventListener('click', function() {
  window.location.href = 'Buscador.html';
});