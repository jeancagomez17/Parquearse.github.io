var estado = false
 function animacionDiv(div, animacion){
	// Detectar el scroll y agregar la clase cuando el div esté en la pantalla
	let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    var divs = document.querySelectorAll(`.${div}`); // Selecciona todos los elementos con la clase .card
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    divs.forEach(function(div) {
        var divPosition = div.getBoundingClientRect();
        if(!estado){
           
            // Solo si el usuario está bajando el scroll
        if (currentScrollTop > lastScrollTop) {
            // Si la parte superior del div está en la ventana visible
            if (divPosition.top < window.innerHeight && divPosition.bottom > 0) {
                div.classList.add('animate__animated', animacion);
               
            }
        }
        }
        
    });

    // Actualizar el último valor de scroll
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
}