//login form submission
    $("#but1").click((a) => {
        let email = $('#email1').val();

        let password = $('#password1').val();



        if (email == "" && password == "" || email == "" || password == "") {
            alert("name and password is incorrect")
        }
        else {
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/users",
                data: { "email": email, "password": password },
                success: function (data, status, xhr) {
                    console.log(data);
                    alert(data);
                    if (data !== '[]') {
                        sessionStorage.setItem('user', data);
                        window.location.replace('#');
                    }
                    else {
                        $('.text-muted').html('Wrong Email Id or Password');
                        $('.text-muted').css('color', 'red');
                        alert('error');
                    }
                },

                error: function (jqXhr, textStatus, errorMessage) {
                    console.log('error' + errorMessage);
                },
                dataType: "text",
                contentType: "application/json",

            });
        }

        a.preventDefault();

    });
