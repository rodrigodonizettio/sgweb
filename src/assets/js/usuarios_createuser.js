$(document).ready(function() {

    $(document.getElementById('usuarios_linkcriar')).click(function() {
    
        var divcriar = document.getElementById('usuarios_divcriar');        
        if($(divcriar).hasClass('collapse')) $(divcriar).collapse('show');
        
        var diveditar = document.getElementById('usuarios_diveditar');        
        if($(diveditar).hasClass('collapse')) $(diveditar).collapse('hide');
        
        var divexcluir = document.getElementById('usuarios_divexcluir');        
        if($(divexcluir).hasClass('collapse')) $(divexcluir).collapse('hide');
        
        document.getElementById('usuarios_textlogin').value = '';
        ///
        document.getElementById('usuarios_passwordsenha').value = '';
        ///
        document.getElementById('usuarios_passwordrepita').value = '';
        ///
        document.getElementById('usuarios_radioadministrador').checked = true;

    });

});