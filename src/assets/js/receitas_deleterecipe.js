$(document).ready(function() {

    $(document.getElementById('receitas_linkexcluir')).click(function() {
    
        var divcriar = document.getElementById('receitas_divcriar');        
        if($(divcriar).hasClass('collapse')) $(divcriar).collapse('hide');
        
        var diveditar = document.getElementById('receitas_diveditar');        
        if($(diveditar).hasClass('collapse')) $(diveditar).collapse('hide');
        
        var divexcluir = document.getElementById('receitas_divexcluir');        
        if($(divexcluir).hasClass('collapse')) $(divexcluir).collapse('show');
        
    });

});