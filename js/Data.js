const libros = [
    {
      titulo: "Cien años de soledad",
      autor: "García Márquez",
      genero: "Ficción",
      codigo: "1a2b3C4D",
      editorial: "Editorial ABC",
      precio: 50000,
      publicacion: "1967",
      imagen: "./img/Cien años de soledad.jpg" 
    },
    {
        titulo: "1984",
        autor: "George Orwell ",
        genero: "Ficción",
        codigo: "5A6b7Cd8",
        editorial: "Editorial DEF",
        precio: 45000,
        añoPublicacion: 1949,
        imagen: "./img/1984.jpeg" 
      },
      {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        codigo: "9eFgH1Ij",
        editorial: "Editorial GHI",
        precio: 35000,
        añoPublicacion: 1813,
        imagen: "./img/Orgullo y prejuicio.jpg" 
      },
      {
        titulo: "El Alquimista",
        autor: "Paulo Coelho",
        genero: "Ficción ",
        codigo: "kLmN2oPq",
        editorial: "Editorial JKL",
        precio: 40000,
        añoPublicacion: 1988,
        imagen: "./img/El Alquimista.jpg" 
      },
      {
        titulo: "La Odisea",
        autor: " Homero",
        genero: "Clásico",
        codigo: "3rStUv4Wx",
        editorial: "Editorial MNO",
        precio: 30000,
        añoPublicacion: 1953,
        imagen: "./img/La Odisea.jpeg" 
      },
      {
        titulo: "Matar un ruiseñor",
        autor: "Harper Lee",
        genero: "Ficción",
        codigo: "7yZ8Ab9Cd ",
        editorial: "Editorial PQR",
        precio: 38000,
        añoPublicacion: 1960,
        imagen: "./img/Matar un ruiseñor.jpeg" 
      },
      {
        titulo: "El Principito",
        autor: " Antoine de Saint-Exupéry",
        genero: "Ficción",
        codigo: "eF1gH2iJ3",
        editorial: "Editorial XYZ",
        precio: 42000,
        añoPublicacion: 1943,
        imagen: "./img/El Principito.jpeg" 
      },
      {
        titulo: "Cumbres borrascosas",
        autor: " Emily Brontë ",
        genero: "Clásico",
        codigo: " 1Aa2b3C4d ",
        editorial: "Editorial ABC",
        precio: 55000,
        añoPublicacion:1847 ,
        imagen: "./img/Cumbres borrascosas.jpeg" 
      },
      {
        titulo: "La Metamorfosis",
        autor: "Franz Kafka",
        genero: "Ficción",
        codigo: "9Zz1Aa2Bb",
        editorial: "Editorial DEF",
        precio: 51000,
        añoPublicacion: 1915,
        imagen: "./img/La Metamorfosis.jpeg" 
      },
      {
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        genero: "Ficción",
        codigo: "2Ii3Jj4Kk",
        editorial: "Editorial GHI",
        precio: 62000 ,
        añoPublicacion:1963 ,
        imagen: "./img/Rayuela.jpeg" 
      },
      {
        titulo: "Los miserables",
        autor: "Victor Hugo",
        genero: "Clásico",
        codigo: "5Ll6Mm7Nn",
        editorial: " Editorial JQL",
        precio: 58000,
        añoPublicacion: 1862,
        imagen: "./img/Los miserables.jpeg" 
      },
      {
        titulo: "Rebelión en la granja",
        autor: "George Orwell",
        genero: "Ficción",
        codigo: "0Uu1Vv2Ww",
        editorial: "Editorial MNO",
        precio: 59000,
        añoPublicacion: 1945,
        imagen: "./img/Rebelión en la granja.jpeg" 
      },
      {
        titulo: "Don Quijote",
        autor: "Miguel de Cervantes",
        genero: "Clásico",
        codigo: "7Xx8Yy9Zz",
        editorial: "Editorial PQR ",
        precio: 55000,
        añoPublicacion:1605 ,
        imagen: "./img/Don Quijote.jpeg" 
      },
      {
        titulo: "Anna Karenina",
        autor: "León Tolstói",
        genero: "Romance",
        codigo: "3Aa4Bb5Cc",
        editorial: "Editorial XYZ",
        precio: 51000,
        añoPublicacion: 1877,
        imagen: "./img/Anna Karenina}.jpeg" 
      },
      {
        titulo: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        codigo: "6Dd7Ee8Ff",
        editorial: "Editorial ABC",
        precio: 57000,
        añoPublicacion: 1954,
        imagen: "./img/El Señor de los Anillos.jpeg" 
      },
      {
        titulo: "El Perfume",
        autor: "Patrick Süskind",
        genero: "Ficcion",
        codigo: "9Gg1Hh2Ii",
        editorial: "Editorial DEF",
        precio: 53000,
        añoPublicacion: 1985,
        imagen: "./img/El Perfume.jpeg" 
      },
      {
        titulo: "La Sombra del Viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Misterio",
        codigo: "3Jj4Kk5Ll",
        editorial: "Editorial GHI",
        precio: 59000,
        añoPublicacion: 2001,
        imagen: "./img/La Sombra del Viento.jpg" 
      },
      {
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        genero: "Misterio",
        codigo: " 6Mm7Nn8Oo",
        editorial: " Editorial JKL",
        precio:60000 ,
        añoPublicacion: 2003,
        imagen: "./img/El código Da Vinci.jpeg" 
      },
      {
        titulo: "El viejo y el mar",
        autor: "Ernest Hemingway",
        genero: " Ficción",
        codigo: "2Pp3Qq4Rr",
        editorial: " Editorial MNO",
        precio: 51000,
        añoPublicacion:1952 ,
        imagen: "./img/El viejo y el mar.jpeg" 
      },
      {
        titulo: "Moby Dick",
        autor: "Herman Melville",
        genero: "Aventura",
        codigo: "5Ss6Tt7Uu",
        editorial: " Editorial PQR",
        precio: 58000,
        añoPublicacion: 1851,
        imagen: "./img/Moby Dick.jpeg" 
      },
      {
        titulo: "El túnel",
        autor: "Ernesto Sabato",
        genero: "Ficción",
        codigo: "1Bb2Cc3Dd",
        editorial: "Editorial XYZ",
        precio: 57000,
        añoPublicacion: 1948,
        imagen: "./img/El túnel.jpeg" 
      },
      {
        titulo: "La carretera",
        autor: "Cormac McCarthy ",
        genero: "Ficción",
        codigo: "E7F8g9",
        editorial: "Editorial ABC",
        precio:59000,
        añoPublicacion:2006 ,
        imagen: "./img/La carretera.jpg" 
      },
      {
        titulo: "Lolita",
        autor: "Vladimir Nabokov ",
        genero: "Ficción ",
        codigo: " Y1Z2A3",
        editorial: "Editorial DEF",
        precio: 56000,
        añoPublicacion: 1955 ,
        imagen: "./img/Lolita.jpg" 
      },
      {
        titulo: "La sombra del viento",
        autor: " Carlos Ruiz Zafón",
        genero: "Misterio",
        codigo: "B4C5d6",
        editorial: "Editorial GHI",
        precio: 51000,
        añoPublicacion:2001 ,
        imagen: "./img/La sombra del viento.jpg" 
      },
      {
        titulo: "Los hermanos Karamázov",
        autor: "Fyodor Dostoevsky",
        genero: "Ficción",
        codigo: "V6W7x8",
        editorial: "Editorial JKL",
        precio:57000 ,
        añoPublicacion: 1880,
        imagen: "./img/Los hermanos Karamázov.jpg" 
      },
      {
        titulo: "Guerra y paz",
        autor: "León Tolstói",
        genero: "Histórico",
        codigo: " M1N2o3",
        editorial: " Editorial ABC",
        precio: 53000,
        añoPublicacion: 1869,
        imagen: "./img/Guerra y paz.jpeg" 
      },
      {
        titulo: "Crimen y castigo",
        autor: "Fyodor Dostoevsky",
        genero: "Ficción",
        codigo: "G1H2i3",
        editorial: "Editorial MNO",
        precio: 59000,
        añoPublicacion: 1866,
        imagen: "./img/Crimen y castigo.jpg" 
      },
      {
        titulo: "La ciudad y los perros",
        autor: "Mario Vargas Llosa",
        genero: "Ficción",
        codigo: "X9Y1z2",
        editorial: "Editorial PQR",
        precio:56000,
        añoPublicacion:1963,
        imagen: "./img/La ciudad y los perros.jpg" 
      },
      {
        titulo: "El lector",
        autor: "Bernhard Schlink",
        genero: "Ficción",
        codigo: "U6V7w8",
        editorial: "Editorial ABC",
        precio:57000,
        añoPublicacion: 1995,
        imagen: "./img/El lector.jpg" 
      },
      {
        titulo: "La chica del tren",
        autor: "Paula Hawkins",
        genero: "Misterio",
        codigo: "O9P1q2",
        editorial: "Editorial DEF",
        precio:60000,
        añoPublicacion:2015,
        imagen: "./img/La chica del tren.jpg" 
      },
      {
        titulo: "El club de la pelea",
        autor: "Chuck Palahniuk",
        genero: "Ficción",
        codigo: "I3J4k5",
        editorial: "Editorial XYZ",
        precio:57000,
        añoPublicacion:1996,
        imagen: "./img/El club de la pelea.jpg" 
      },
      {
        titulo: "La casa de los espíritus",
        autor: "Isabel Allende",
        genero: "Ficción",
        codigo: "W9X1y2",
        editorial: "Editorial GHI",
        precio:53000,
        añoPublicacion:1982,
        imagen: "./img/La casa de los espíritus.jpg" 
      },
      {
        titulo: "La fiesta del chivo",
        autor: "Mario Vargas Llosa",
        genero: "Ficción",
        codigo: "T6U7v8",
        editorial: "Editorial JKL",
        precio:60000,
        añoPublicacion:2000,
        imagen: "./img/La fiesta del chivo.jpg" 
      },
      {
        titulo: "Pedro Páramo",
        autor: "Juan Rulfo",
        genero: "Ficción",
        codigo: "D9E1f2",
        editorial: "Editorial MNO",
        precio:58000,
        añoPublicacion:1955,
        imagen: "./img/Pedro Páramo.jpg" 
      },
      {
        titulo: "La ladrona de libros",
        autor: " Markus Zusak",
        genero: "Ficción",
        codigo: "U9v1W2",
        editorial: "Editorial PQR",
        precio:59000,
        añoPublicacion:2005,
        imagen: "./img/La ladrona de libros.jpg" 
      },
      {
        titulo: "Amor tiempos cólera",
        autor: "Gabriel García Márquez",
        genero: " Romance",
        codigo: "5Ee6Ff7Gg",
        editorial: "Editorial XYZ",
        precio:54000,
        añoPublicacion:1985,
        imagen: "./img/Amor tiempos cólera.jpg" 
      },
      {
        titulo: "Historia interminable",
        autor: "Michael Ende",
        genero: "Fantasía",
        codigo: "2Zz3Aa4Bb",
        editorial: "Editorial ABC",
        precio:57000,
        añoPublicacion:1979,
        imagen: "./img/Historia interminable.jpg" 
      },
      {
        titulo: "Los pilares tierra",
        autor: "Ken Follett",
        genero: "Ficción",
        codigo: "6Nn7Oo8Pp",
        editorial: "Editorial DEF",
        precio:51000,
        añoPublicacion:1989,
        imagen: "./img/Los pilares tierra.jpg" 
      },
      {
        titulo: "Vuelta al mundo",
        autor: "Julio Verne",
        genero: "Aventura",
        codigo: "0Kk1Ll2Mm",
        editorial: "Editorial GHI ",
        precio:60000,
        añoPublicacion:1873,
        imagen: "./img/Vuelta al mundo.jpg" 
      },
      {
        titulo: "Matilda",
        autor: "Roald Dahl",
        genero: " Infantil",
        codigo: "3Hh4Ii5Jj",
        editorial: "Editorial KLM",
        precio:59000 ,
        añoPublicacion:1988,
        imagen: "./img/Matilda.jpg" 
      },
      {
        titulo: "Insoportable levedad",
        autor: "Milan Kundera",
        genero: "Ficción",
        codigo: "8Vv9Ww1Xx",
        editorial: "Editorial MNO",
        precio:56000,
        añoPublicacion:1984,
        imagen: "./img/Insoportable levedad.jpg" 
      },
      {
        titulo: "It",
        autor: "Stephen King",
        genero: "Terror",
        codigo: "a1B2c3D4",
        editorial: " Editorial ABC",
        precio:55000,
        añoPublicacion:1986,
        imagen: "./img/It.jpg" 
      },
      {
        titulo: "El resplandor",
        autor: "Stephen King",
        genero: "Terror",
        codigo: "E5f6G7g8",
        editorial: "Editorial XYZ",
        precio:62000,
        añoPublicacion:1977,
        imagen: "./img/El resplandor.jpg" 
      },
      {
        titulo: "Carrie",
        autor: "Stephen King",
        genero: "Terror",
        codigo: "H9I1j2K3",
        editorial: "Editorial PQR",
        precio: 48000,
        añoPublicacion:1974,
        imagen: "./img/Carrie.jpg" 
      },
      {
        titulo: "El Exorcista",
        autor: "William Peter Blatty",
        genero: "Terror",
        codigo: "L4Mm5Nn6",
        editorial: " Editorial ABC",
        precio: 57000,
        añoPublicacion: 1971,
        imagen: "./img/El Exorcista.jpg" 
      },
      {
        titulo: "Drácula",
        autor: "Bram Stoker",
        genero: "Terror",
        codigo: "O7Pp8Qq9",
        editorial: "Editorial DEF",
        precio: 53000,
        añoPublicacion:1897,
        imagen: "./img/Drácula.jpg" 
      },
      {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        genero: "Terror",
        codigo: "R1Ss2Tt3",
        editorial: " Editorial GHI",
        precio:59000,
        añoPublicacion:1818,
        imagen: "./img/Frankenstein.jpg" 
      },
      {
        titulo: "El cuervo",
        autor: "Edgar Allan Poe",
        genero: "Terror",
        codigo: "U6Vv7Ww8",
        editorial: "Editorial JKL",
        precio:60000,
        añoPublicacion:1845,
        imagen: "./img/El cuervo.jpg" 
      },
      {
        titulo: "La mujer de negro",
        autor: "Susan Hill",
        genero: "Terror",
        codigo: " X2Yy3Zz4",
        editorial: "Editorial DEF",
        precio: 51000,
        añoPublicacion: 1983,
        imagen: "./img/La mujer de negro.jpg" 
      },
      {
        titulo: "Misery",
        autor: "Stephen King",
        genero: "Terror",
        codigo: "D9Ee1Ff2",
        editorial: "Editorial MNO",
        precio:58000 ,
        añoPublicacion: 1987,
        imagen: "./img/Misery.jpg" 
      },
      
];



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
    showProducts(currentPage);
  }
}


function nextPage() {
  const maxPage = Math.ceil(libros.length / itemsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    showProducts(currentPage);
  }
}


function adjustPaginationByWindowSize() {
  const winWidth = window.innerWidth;
  if (winWidth > 1600) { itemsPerPage = 15; }
  else if (winWidth > 1230) { itemsPerPage = 15; }
  else if (winWidth > 980) { itemsPerPage = 15; }
  else if (winWidth > 750) { itemsPerPage = 15; }
  else if (winWidth > 510) { itemsPerPage = 15; }
  else { itemsPerPage = 15; }
  showProducts(); 
}
window.onload = adjustPaginationByWindowSize;
window.onresize = adjustPaginationByWindowSize;

