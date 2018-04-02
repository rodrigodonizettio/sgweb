$(document).ready(function() {

    $(document.getElementById('usuarios_linkexcluir')).click(function() {
    
        var divcriar = document.getElementById('usuarios_divcriar');        
        if($(divcriar).hasClass('collapse')) $(divcriar).collapse('hide');
        
        var diveditar = document.getElementById('usuarios_diveditar');        
        if($(diveditar).hasClass('collapse')) $(diveditar).collapse('hide');
        
        var divexcluir = document.getElementById('usuarios_divexcluir');        
        if($(divexcluir).hasClass('collapse')) $(divexcluir).collapse('show');
        
    });

});