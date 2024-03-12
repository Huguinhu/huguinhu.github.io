let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animation = "slide 1s forwards"; // Adiciona a animação de "empurrar" para a próxima imagem
    setTimeout(showSlides, 2000); // Troca de imagem a cada 2 segundos
}

showSlides(); // Inicia o slideshow automaticamente
