$(document).ready(function() {

    $(document.getElementById('usuarios_linkeditar')).click(function() {
    
        var divcriar = document.getElementById('usuarios_divcriar');        
        if($(divcriar).hasClass('collapse')) $(divcriar).collapse('hide');
        
        var divexcluir = document.getElementById('usuarios_divexcluir');        
        if($(divexcluir).hasClass('collapse')) $(divexcluir).collapse('hide');
        
        var diveditar = document.getElementById('usuarios_diveditar');        
        if($(diveditar).hasClass('collapse')) $(diveditar).collapse('show');
        
    });

});