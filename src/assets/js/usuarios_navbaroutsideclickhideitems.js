$(document).ready(function() {
    
    $(document.getElementById('usuarios_body')).bind('click', function(e) {

        //IF CLICK HAPPENED OUTSIDE THE .NAVBAR (CLASS), WE SHOULD HIDE IT
        if($(e.target).closest('.navbar').length == 0) {
            
            var opened = $('.navbar-collapse').hasClass('collapse in');
            if (opened === true) $('.navbar-collapse').collapse('hide'); //TRUE: SHOWED
            
        }

    });
    
});