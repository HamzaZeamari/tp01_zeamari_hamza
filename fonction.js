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
                if (characterCount >= 3) {
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

    $(document).ready(function() {
        $('#formValid').on('submit', function(event) {
            let countVerif = 0;
            if ($('#nom').val().length < 3) {
                console.log($('#nom').val().length);
                $('#nomHelp').css('color', 'red');
                countVerif++;

            }
            if ($('#prenom').val().length < 3) {
                $('#prenomHelp').css({ color: "red" });

                countVerif++;
            }
            if ($('#CP').val().length != 4 || $('#CP').val().length != 5) {
                $('#cpHelp').css({ color: "red" });

                countVerif++;
                console.log(countVerif);
            }
            if ($('#ville').val().length < 0) {
                $('#villeHelp').css({ color: "red" });

                countVerif++;
            }
            if ($('#tel').val().length != 10) {
                $('#telHelp').css({ color: "red" });

                countVerif++;
                console.log(countVerif);
            }
            if (!validerEmail($('#email'))) {
                $('#emailHelp').css({ color: "red" });

                countVerif++;
                console.log(countVerif);
            }
            if ($('#password').val().length < 6) {
                $('#passwordHelp').css({ color: "red" });

                countVerif++;
            }
            if ($('#confpassword').val() != $('#password').val()) {
                $('#confpasswordHelp').css({ color: "red" });

                countVerif++;
            }
            if ($('#login').val().length < 3) {
                $('#loginHelp').css({ color: "red" });

                countVerif++;
            }
            if (countVerif != 0) {
                event.preventDefault();
            } else {
                alert("Tout est validé !!!");
                return true;
            }

        });
    });