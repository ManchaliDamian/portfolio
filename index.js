

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

