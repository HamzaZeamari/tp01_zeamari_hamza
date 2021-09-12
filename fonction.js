$(document).ready(function() {
    $('#nom').change(function() {
        let characterCount = $(this).val().length;
        if (characterCount >= 3) {
            $('#nomHelp').hide();
        } else {
            $('#nomHelp').show();
        }
    });
})
$(document).ready(function() {
    $('#prenom').change(function() {
        let characterCount = $(this).val().length;
        if (characterCount >= 3) {
            $('#prenomHelp').hide();
        } else {
            $('#prenomHelp').show();
        }
    });
})
$(document).ready(function() {
    $('#CP').change(function() {
        let characterCount = $(this).val().length;
        console.log(characterCount);
        if (characterCount == 4 || characterCount == 5) {
            $('#cpHelp').hide();
        } else {
            $('#cpHelp').show();
        }
    });
})
$(document).ready(function() {
    $('#ville').change(function() {
        let characterCount = $(this).val().length;
        console.log(characterCount);
        if (characterCount > 0) {
            $('#villeHelp').hide();
        } else {
            $('#villeHelp').show();
        }
    });
})
$(document).ready(function() {
    $('#tel').change(function() {
        let characterCount = $(this).val().length;
        console.log(characterCount);
        if (characterCount = 10) {
            $('#telHelp').hide();
        } else {
            $('#telHelp').show();
        }
    });
})