const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        const seguienteElemento = document.getElementById(proximoPasso);
        
        if (seguienteElemento) {
            atual.classList.remove('ativo');
            seguienteElemento.classList.add('ativo');
        }
    });
});