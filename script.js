function showContent(id) {
    // Esconde todos os elementos com a classe "content"
    document.querySelectorAll('main > div').forEach(function(el) {
        el.style.display = 'none';
    });

    // Exibe o elemento com o ID correspondente ao clicado
    document.getElementById(id).style.display = 'block';
}

