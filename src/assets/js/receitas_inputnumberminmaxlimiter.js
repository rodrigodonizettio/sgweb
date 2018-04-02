$(document).ready(function() {
    
    $(":input[type=number]").on('keyup mouseup', function () {

        var x = $(this).attr('id');
        if((x === "tempo1") || (x === "tempo2") || (x === "tempo3")) {
            
            if(document.getElementById(x).value > 72) this.value = 72;
            if(document.getElementById(x).value < 1) this.value = 1;
            if(document.getElementById(x).value.length == 0) this.value = 1;
            
        } else if(document.getElementById(x).value > 120) this.value = 120;
        else if(document.getElementById(x).value < 0) this.value = 0;
        else if(document.getElementById(x).value.length == 0) this.value = 0;

    });

});