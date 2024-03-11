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
    const slides = document.querySelectorAll('.carousel img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides();


