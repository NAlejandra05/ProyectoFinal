document.addEventListener('DOMContentLoaded', () => {
    const inputFiltro = document.getElementById('filtro');
    const tablaLibros = document.getElementById('tabla-libros').getElementsByTagName('tbody')[0];
    const paginacionDiv = document.getElementById('paginacion');
    const regresarBoton = document.getElementById('regresar');
    const limpiarBoton = document.getElementById('limpiar');
    const buscarBoton = document.getElementById('buscar');
    const elementosPorPagina = 10;
    let paginaActual = 1;
    let librosFiltrados = [];

  
    async function filtrarLibros() {
        mostrarLoading(); 
        
        
        await new Promise(resolve => {
            setTimeout(() => {
                const filtro = quitarAcentos(inputFiltro.value).toLowerCase(); 
                librosFiltrados = libros.filter(libro => {
                    return quitarAcentos(libro.titulo).toLowerCase().includes(filtro) ||
                           quitarAcentos(libro.autor).toLowerCase().includes(filtro) ||
                           quitarAcentos(libro.genero).toLowerCase().includes(filtro) ||
                           quitarAcentos(libro.codigo).toLowerCase().includes(filtro) ||
                           quitarAcentos(libro.editorial).toLowerCase().includes(filtro) ||
                           quitarAcentos(libro.añoPublicacion.toString()).includes(filtro);
                });
                paginaActual = 1; 
                resolve();
            }, 2000); 
        });

       
        mostrarLibrosEnTabla(librosFiltrados, paginaActual);
        actualizarPaginacion(librosFiltrados.length);
    }

    
    function quitarAcentos(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    
    function mostrarLoading() {
        tablaLibros.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';
    }

    
    function mostrarLibrosEnTabla(libros, pagina) {
        tablaLibros.innerHTML = '';
        const inicio = (pagina - 1) * elementosPorPagina;
        const fin = inicio + elementosPorPagina;
        const librosPagina = libros.slice(inicio, fin);

        librosPagina.forEach(libro => {
            const fila = document.createElement('tr');

            const celdaTitulo = document.createElement('td');
            celdaTitulo.textContent = libro.titulo;
            fila.appendChild(celdaTitulo);

            const celdaImagen = document.createElement('td');
            const imagen = document.createElement('img');
            imagen.src = libro.imagen;
            imagen.alt = libro.titulo;
            celdaImagen.appendChild(imagen);
            fila.appendChild(celdaImagen);

            const celdaGenero = document.createElement('td');
            celdaGenero.textContent = libro.genero;
            fila.appendChild(celdaGenero);

            const celdaPrecio = document.createElement('td');
            celdaPrecio.textContent = libro.precio;
            fila.appendChild(celdaPrecio);

            const celdaAutor = document.createElement('td');
            celdaAutor.textContent = libro.autor;
            fila.appendChild(celdaAutor);

            const celdaEditorial = document.createElement('td');
            celdaEditorial.textContent = libro.editorial;
            fila.appendChild(celdaEditorial);

            tablaLibros.appendChild(fila);
        });
    }

    
    function actualizarPaginacion(totalElementos) {
        paginacionDiv.innerHTML = ''; 
        const totalPaginas = Math.ceil(totalElementos / elementosPorPagina);

        for (let i = 1; i <= totalPaginas; i++) {
            const boton = document.createElement('button');
            boton.textContent = i;
            boton.classList.add('paginacion-boton');
            if (i === paginaActual) {
                boton.classList.add('activo');
            }
            boton.addEventListener('click', () => {
                paginaActual = i;
                mostrarLibrosEnTabla(librosFiltrados, paginaActual);
                actualizarPaginacion(librosFiltrados.length);
            });
            paginacionDiv.appendChild(boton);
        }
    }

    
    buscarBoton.addEventListener('click', async () => {
        await filtrarLibros();
    });

    
    limpiarBoton.addEventListener('click', () => {
        inputFiltro.value = '';
        librosFiltrados = [];
        mostrarLibrosEnTabla(librosFiltrados, 1);
        actualizarPaginacion(librosFiltrados.length);
    });

    
    regresarBoton.addEventListener('click', () => {
        window.location.href = 'index.html'; 
    });
});
