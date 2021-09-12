    //#region validation 
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
    $(document).ready(function() {
        $('#email').change(function() {
            if (validerEmail(this.value)) {
                $('#emailHelp').hide();
            } else {
                $('#emailHelp').show();
            }
        });
    })
    $(document).ready(function() {
        $('#password').change(function() {
            let characterCount = $(this).val().length;
            console.log(characterCount);
            if (characterCount >= 6) {
                $('#passwordHelp').hide();
            } else {
                $('#passwordHelp').show();
            }
        });
    })
    $(document).ready(function() {
        $('#confpassword').change(function() {
            let pass = $('#password').val();
            if (pass == $(this).val()) {
                $('#confirmpHelp').hide();
            } else {
                $('#confirmpHelp').show();
            }
        });
    })
    $(document).ready(function() {
            $('#login').change(function() {
                let characterCount = $(this).val().length;
                console.log(characterCount);
                if (characterCount > 3) {
                    $('#loginHelp').hide();
                } else {
                    $('#loginHelp').show();
                }
            });
        })
        //#endregion validation

    function validerEmail($email) {
        var res = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return res.test($email);
    }



    $("#formValid").submit(function(event) {
        event.preventDefault();
        let countVerif = 0;
        if ($('#nom').val().length < 3) {}
        if ($('#prenom').val().length < 3) {}
        if ($('#CP').val().length < 3) {}
        if ($('#ville').val().length < 3) {}
        if ($('#tel').val().length < 3) {}
        if ($('#email').val().length < 3) {}
        if ($('#password').val().length < 3) {}
        if ($('#confpassword').val().length < 3) {}
        if ($('#login').val().length < 3) {}

    });