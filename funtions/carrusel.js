function iniciarCarrusel() {
    const timelineContainer = document.getElementById('timeline-container');
    const timeline = document.getElementById('timeline');
    const memoryPoints = document.querySelectorAll('.memory-point');
    const memoryDetails = document.getElementById('memory-details');
    const memoryImage = document.getElementById('memory-image');
    const memoryDescription = document.getElementById('memory-description');
    const closeDetailsButton = document.getElementById('close-details');
  
    let currentIndex = 0;
    const transitionDuration = 300; // Esta es la duracin en milisegundos de la transición de opacidad
    let intervalId;
  
    memoryDetails.classList.add('hidden');
  
    function mostrarImagen(index) {
      if (index >= 0 && index < memoryPoints.length) {
        const currentPoint = memoryPoints[index];
        const imageUrl = currentPoint.dataset.imagen;
        const description = currentPoint.dataset.descripcion;
  
        memoryImage.src = imageUrl;
        memoryDescription.textContent = description;
  
        memoryDetails.classList.remove('hidden');
        setTimeout(() => {
          memoryDetails.style.opacity = 1;
        }, 10); // agregamos Un pequeño delay 
  
        // Detener el carrusel automático al mostrar los detalles
        clearInterval(intervalId);
      }
    }
  
    // agregamos aqui la Función para avanzar al siguiente punto
    function siguienteImagen() {
      currentIndex = (currentIndex + 1) % memoryPoints.length;
      mostrarImagen(currentIndex);
    }
  
    // funcion para que inicie el carrusel automático
    function iniciarCarruselAutomatico() {
      intervalId = setInterval(siguienteImagen, 3000); // Cambiamos la imagen cada 3 segundos
    }
  
    // ponemos el evento para cerrar los detalles y reiniciar el carrusel
    closeDetailsButton.addEventListener('click', () => {
      memoryDetails.style.opacity = 0;
      setTimeout(() => {
        memoryDetails.classList.add('hidden');
        iniciarCarruselAutomatico(); // Reiniciamos el carrusel al cerrar los detalles
      }, transitionDuration);
    });
  
    // ponemos el evento para que al hacer click en un punto de la línea de tiempo se muestre la imagen correspondiente
    memoryPoints.forEach((point, index) => {
      point.addEventListener('click', () => {
        mostrarImagen(index);
      });
    });
  
    // Que inicie el carrusel automáticamente al cargar la página
    iniciarCarruselAutomatico();
  }
  
  // Llamamos a la función cuando el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', iniciarCarrusel);