
const form = document.getElementById('productForm');


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


form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('Autor').value;
  const genero = document.getElementById('genero').value;
  const codigo = document.getElementById('codigo').value;
  const editorial = document.getElementById('editorial').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const añoPublicacion = parseInt(document.getElementById('añoPublicacion').value);
  const imagen = document.getElementById('imagen').value;

 

  
  form.reset();
  // mensajeElement.textContent = ''; 

  
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 5000); 
});