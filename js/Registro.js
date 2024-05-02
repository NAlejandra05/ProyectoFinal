// Selección del formulario por su id
const form = document.getElementById('productForm');

// Función para limpiar los campos del formulario
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

// Agregar un evento de escucha al evento submit del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Previene el envío predeterminado del formulario

  // Obtener los valores de los campos del formulario
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('Autor').value;
  const genero = document.getElementById('genero').value;
  const codigo = document.getElementById('codigo').value;
  const editorial = document.getElementById('editorial').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const añoPublicacion = parseInt(document.getElementById('añoPublicacion').value);
  const imagen = document.getElementById('imagen').value;

  // Aquí iría tu lógica de validación y manipulación de datos...

  // Restablecer el formulario y limpiar el mensaje
  form.reset(); // Esto restablecerá el formulario
  // mensajeElement.textContent = ''; // Asegúrate de definir mensajeElement

  
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 5000); 
});