$(document).ready(function() {

    $(document.getElementById('receitas_linkcriar')).click(function() {
    
        var divcriar = document.getElementById('receitas_divcriar');        
        if($(divcriar).hasClass('collapse')) $(divcriar).collapse('show');
        
        var diveditar = document.getElementById('receitas_diveditar');        
        if($(diveditar).hasClass('collapse')) $(diveditar).collapse('hide');
        
        var divexcluir = document.getElementById('receitas_divexcluir');        
        if($(divexcluir).hasClass('collapse')) $(divexcluir).collapse('hide');
        
        document.getElementById('receitas_textnome').value = '';
        ///
        document.getElementById('receitas_radio3etapas').checked = true;
        ///
        document.getElementById('receitas_numbertemperaturaentrada1').value = 50;
        document.getElementById('receitas_numbertemperaturamassa1').value = 50;
        document.getElementById('receitas_numbertempoetapa1').value = 24;
        ///
        document.getElementById('receitas_numbertemperaturaentrada2').value = 50;
        document.getElementById('receitas_numbertemperaturamassa2').value = 50;
        document.getElementById('receitas_numbertempoetapa2').value = 24;
        ///
        document.getElementById('receitas_numbertemperaturaentrada3').value = 50;
        document.getElementById('receitas_numbertemperaturamassa3').value = 50;
        document.getElementById('receitas_numbertempoetapa3').value = 24;
        
        $('#receitas_coletapa1').removeClass('disabledelements');
        $('#receitas_coletapa2').removeClass('disabledelements');
        $('#receitas_coletapa3').removeClass('disabledelements');

    });

});