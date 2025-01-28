// Archivo: app.js

// Función para cargar los blogs desde un archivo JSON
/*async function cargarBlogs() {
    try {
      const response = await fetch("blogs.json"); // Ruta al archivo JSON
      const blogs = await response.json();
  
      mostrarBlogs(blogs);
    } catch (error) {
      console.error("Error al cargar los blogs:", error);
    }
  }*/
  
  // Función para mostrar los blogs en el HTML
  /*function mostrarBlogs(blogs) {
    const blogContainer = document.getElementById("blog-container");
  
    blogs.forEach((blog) => {
      // Crear un div para cada blog
      const blogCard = document.createElement("div");
      blogCard.classList.add("blog-card");
  
      // Crear el contenido del blog
      blogCard.innerHTML = `
        <img src="${blog.imagen_url}" alt="${blog.titulo}">
        <h2>${blog.titulo}</h2>
        <p>${blog.contenido}</p>
        <p><strong>Autor:</strong> ${blog.autor}</p>
        <p><strong>Fecha de publicación:</strong> ${blog.fecha_publicacion}</p>
        <div class="etiquetas">
          ${blog.etiquetas.map((etiqueta) => `<span class="etiqueta">${etiqueta}</span>`).join("")}
        </div>
      `;
  
      // Agregar el blog al contenedor
      blogContainer.appendChild(blogCard);
    });
  }*/
  
  // Llamar a la función al cargar la página
  //cargarBlogs();
  
  document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
