 // Espera a que la página esté completamente cargada
 window.addEventListener("load", function () {
    // Oculta la pantalla de carga
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");

    // Muestra el contenido con animación
    const content = document.getElementById("mainContent");
    content.classList.add("fade-in");
});