function showContent(id) {
  /* Insira as alterações no seu arquivo JavaScript existente */

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#fff'; /* Fundo branco ao passar o mouse */
            this.style.color = '#000'; /* Texto preto ao passar o mouse */
        });
        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent'; /* Remove o fundo ao tirar o mouse */
            this.style.color = '#000'; /* Texto preto ao tirar o mouse */
        });
    });
});
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
    setTimeout(showSlides, 2000); // Troca de imagem a cada 2 segundos
}

showSlides(); // Inicia o slideshow automaticamente


