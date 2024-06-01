document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('productForm');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

     
      const camposValidos = validarCampos();
      const productoValido = validarProducto();
      const productoExistente = existeProducto();

      if (camposValidos && productoValido && !productoExistente) {
          guardarDatos();
          alert('¡Producto registrado correctamente!');
          form.reset(); 
          window.location.href = 'index.html'; 
      } else {
          if (!camposValidos) {
              alert('Por favor, completa todos los campos.');
          } else if (!productoValido) {
              alert('Por favor, completa los campos correctamente.');
          } else {
              alert('El producto ya existe. Por favor, ingresa uno nuevo.');
          }
      }
  });
});

function guardarDatos() {
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('Autor').value;
  const genero = document.getElementById('genero').value;
  const codigo = document.getElementById('codigo').value;
  const editorial = document.getElementById('editorial').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const añoPublicacion = parseInt(document.getElementById('añoPublicacion').value);
  const imagen = document.getElementById('imagen').files[0].name;

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

  console.log('Form data:', { titulo, autor, genero, codigo, editorial, precio, añoPublicacion, imagen });
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

function validarCampos() {
  const camposRequeridos = [
      { id: 'titulo', label: 'Título' },
      { id: 'Autor', label: 'Autor' },
      { id: 'genero', label: 'Género' },
      { id: 'codigo', label: 'Código de Producto' },
      { id: 'editorial', label: 'Editorial' },
      { id: 'precio', label: 'Precio' },
      { id: 'añoPublicacion', label: 'Año de Publicación' },
      { id: 'imagen', label: 'Imagen' }
  ];

  let todosLlenos = true;
  let mensajeError = '';

  camposRequeridos.forEach(campo => {
      const valorCampo = document.getElementById(campo.id).value.trim();
      if (valorCampo === '') {
          todosLlenos = false;
          mensajeError += `${campo.label}, `;
      }
  });

  if (!todosLlenos) {
      alert(`Falta llenar los siguientes campos: ${mensajeError.slice(0, -2)}`);
  }

  return todosLlenos;
}

function validarProducto() {
  const titulo = document.getElementById('titulo').value;
  const codigo = document.getElementById('codigo').value;
  const precio = document.getElementById('precio').value;
  const imagen = document.getElementById('imagen').files[0];

  
  if (titulo.length > 20) {
      return false;
  }

  
  if (codigo.length < 8 || !/[a-z]/.test(codigo) || !/[A-Z]/.test(codigo) || !(codigo.match(/\d/g) || []).length >= 2) {
      return false;
  }

  
  if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
      return false;
  }

  
  if (!imagen || !imagen.name) {
      return false;
  }

  return true;
}

function existeProducto() {
  const titulo = document.getElementById('titulo').value;
  const codigo = document.getElementById('codigo').value;
  const imagen = document.getElementById('imagen').files[0].name;

  let productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

 
  const lowerImagen = imagen.toLowerCase();

  
  return productosGuardados.some(producto =>
      producto.titulo.toLowerCase() === titulo.toLowerCase() ||
      producto.codigo === codigo ||
      producto.imagen.toLowerCase() === lowerImagen
  );
}