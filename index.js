

document.addEventListener('DOMContentLoaded', function() {
    // DOMContentLoaded => Se dispara cuando el HTML ha sido completamente cargado y parseado,
    //                     pero antes de que se carguen todos los estilos, imágenes y subframes.
    //                     Útil para manipulación temprana del DOM.


    document.getElementById('presentacion-link').addEventListener('click', function(e) {
        e.preventDefault(); 
        // Prevenir el comportamiento predeterminado del enlace o 
        // el comportamiento por defecto del evento
        //para poder agregarle una funcionalidad específica

        document.getElementById('presentacion').scrollIntoView({ behavior: 'smooth' });
        //scroll suave 
    });
    document.getElementById('experiencia-link').addEventListener('click', function(e) {
        e.preventDefault(); 

        document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('contac-link').addEventListener('click', function(e) {
        e.preventDefault(); 

        document.getElementById('contac').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('scroll', function() {
    const projects = document.getElementById('evento');
    const projectsPosition = projects.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (projectsPosition < screenPosition) {
        projects.classList.add('show');
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
