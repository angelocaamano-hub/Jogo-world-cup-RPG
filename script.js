const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addElementeLitener('click', function(){
        const atual = document.querrySelector('.ativo')
        const proximoPasso = 'passo' + this.getAtribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    })
    
});
    
