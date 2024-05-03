// obtención de datos con una promesa
function obtenerDatosFiltrados() {
    return new Promise(resolve => {
      // Simulación de carga de datos
      setTimeout(() => {
        // Obtener los valores seleccionados por el usuario
        const generoSeleccionado = document.getElementById('geneSelect').value;
        const editorialSeleccionada = document.getElementById('editSelect').value;
        const radioButtons = document.getElementsByName('precio');
        let precioSeleccionado = '';
        radioButtons.forEach(button => {
          if (button.checked) {
            precioSeleccionado = button.value;
          }
        });
  
        // Filtrar los productos según los criterios seleccionados
        const productosFiltrados = libros.filter(libro => {
          let pasaFiltroGenero = true;
          let pasaFiltroEditorial = true;
          let pasaFiltroPrecio = true;
  
          if (generoSeleccionado !== '' && libro.genero !== generoSeleccionado) {
            pasaFiltroGenero = false;
          }
  
          if (editorialSeleccionada !== '' && libro.editorial !== editorialSeleccionada) {
            pasaFiltroEditorial = false;
          }
  
          if (precioSeleccionado !== '') {
            const [rangoMin, rangoMax] = precioSeleccionado.split('-').map(Number);
            if (rangoMax === undefined) {
              pasaFiltroPrecio = libro.precio > rangoMin;
            } else {
              pasaFiltroPrecio = libro.precio >= rangoMin && libro.precio <= rangoMax;
            }
          }
  
          return pasaFiltroGenero && pasaFiltroEditorial && pasaFiltroPrecio;
        });
  
        resolve(productosFiltrados);
      }, 2000); // Simular un retraso de 2 segundos
    });
  }
  
  // Función para filtrar productos
  async function filtrarProductos() {
    // Mostrar mensaje de "Cargando"
    const tablaProductos = document.getElementById('tabla-productos');
    tablaProductos.innerHTML = '<tr><td colspan="7">Cargando...</td></tr>';
  
    // Obtener datos filtrados
    const productosFiltrados = await obtenerDatosFiltrados();
  
    // Mostrar los productos filtrados en la tabla
    mostrarProductos(productosFiltrados);
  }
  
  // Función para mostrar los productos en la tabla
  function mostrarProductos(productos) {
    const tbody = document.getElementById('tbody-productos');
    tbody.innerHTML = '';
  
    productos.forEach(producto => {
      const row = document.createElement('tr');
  
      const tituloCell = document.createElement('td');
      tituloCell.textContent = producto.titulo;
      row.appendChild(tituloCell);
  
      const imagenCell = document.createElement('td');
      const imagen = document.createElement('img');
      imagen.src = producto.imagen;
      imagen.alt = producto.titulo;
      imagenCell.appendChild(imagen);
      row.appendChild(imagenCell);
  
      const categoriaCell = document.createElement('td');
      categoriaCell.textContent = producto.genero;
      row.appendChild(categoriaCell);
  
      const precioCell = document.createElement('td');
      precioCell.textContent = producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
      row.appendChild(precioCell);
  
      const caracteristica1Cell = document.createElement('td');
      caracteristica1Cell.textContent = producto.caracteristica1;
      row.appendChild(caracteristica1Cell);
  
      const caracteristica2Cell = document.createElement('td');
      caracteristica2Cell.textContent = producto.caracteristica2;
      row.appendChild(caracteristica2Cell);
  
      const accionesCell = document.createElement('td');
      const regresarButton = document.createElement('button');
      regresarButton.textContent = 'Regresar';
      regresarButton.addEventListener('click', () => {
        // Acción para regresar a la vista principal
      });
      accionesCell.appendChild(regresarButton);
      row.appendChild(accionesCell);
  
      tbody.appendChild(row);
    });
  }
  
  