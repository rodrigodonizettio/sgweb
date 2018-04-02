$(document).ready(function() {  
    
    $(document.getElementById('receitas_radio1etapa')).click(function() {
    
        $('#receitas_coletapa2').addClass('disabledelements');        
        $('#receitas_coletapa3').addClass('disabledelements');
        $('#receitas_coletapa1').removeClass('disabledelements');
        ///
        document.getElementById('receitas_numbertemperaturaentrada1').value = 50;
        document.getElementById('receitas_numbertemperaturamassa1').value = 50;
        document.getElementById('receitas_numbertempoetapa1').value = 24;
        
    });
    
    $(document.getElementById('receitas_radio2etapas')).click(function() {
        
        $('#receitas_coletapa3').addClass('disabledelements');
        $('#receitas_coletapa1').removeClass('disabledelements');
        $('#receitas_coletapa2').removeClass('disabledelements');
        ///
        document.getElementById('receitas_numbertemperaturaentrada1').value = 50;
        document.getElementById('receitas_numbertemperaturamassa1').value = 50;
        document.getElementById('receitas_numbertempoetapa1').value = 24;
        ///
        document.getElementById('receitas_numbertemperaturaentrada2').value = 50;
        document.getElementById('receitas_numbertemperaturamassa2').value = 50;
        document.getElementById('receitas_numbertempoetapa2').value = 24;
        
    });
    
    $(document.getElementById('receitas_radio3etapas')).click(function() {
        
        $('#receitas_coletapa1').removeClass('disabledelements');
        $('#receitas_coletapa2').removeClass('disabledelements');
        $('#receitas_coletapa3').removeClass('disabledelements');
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
        
    });
    
});