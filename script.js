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


