document.getElementById('registerBtn').addEventListener('click', function() {
  window.location.href = 'Registro.html';
});

document.getElementById('searchBtn').addEventListener('click', function() {
  window.location.href = 'Buscador.html';
}); 

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('productForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    guardarDatos();
  });
});

function guardarDatos() {
  const form = document.getElementById('productForm');

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('Autor').value;
  const genero = document.getElementById('genero').value;
  const codigo = document.getElementById('codigo').value;
  const editorial = document.getElementById('editorial').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const añoPublicacion = parseInt(document.getElementById('añoPublicacion').value); 
  const imagen = document.getElementById('imagen').value;

  const nuevoProducto = {
    titulo,
    autor,
    genero,
    codigo,
    editorial,
    precio,
    añoPublicacion,
    imagen
  };

  let productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
  productosGuardados.push(nuevoProducto);
  localStorage.setItem('productos', JSON.stringify(productosGuardados));
  form.reset();

  console.log('Datos del formulario:', { titulo, autor, genero, codigo, editorial, precio, añoPublicacion, imagen });

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 5000); 
}

function limpiarCampos() {
  document.getElementById('titulo').value = '';
  document.getElementById('Autor').value = '';
  document.getElementById('genero').selectedIndex = 0;
  document.getElementById('codigo').value = '';
  document.getElementById('editorial').value = '';
  document.getElementById('precio').value = '';
  document.getElementById('añoPublicacion').value = '';
  document.getElementById('imagen').value = '';
}