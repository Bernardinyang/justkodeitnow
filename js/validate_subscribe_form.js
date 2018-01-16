$(document).ready(function () {

    var name = $("#name");
    var name_result = $(".name_result");

    var email = $("#email");
    var email_result = $(".email_result");

    name.keyup(validateName);
    email.keyup(validateEmail);

    var state = false;

    function validateName()
    {
        var php_name = name.val();

        if (php_name == "") {

            name_result.removeClass("name_result");
            name_result.removeClass("success");
            name_result.addClass("errors");
            name_result.text("Name is required");
            state = false;

        } else if (php_name.length < 4) {

            name_result.removeClass("name_result");
            name_result.removeClass("success");
            name_result.addClass("errors");
            name_result.text("Name must be at least 4 characters and above");
            state = false;

        } else {

            $.post('includes/validate_form.php', {name: php_name}, function (data) {

                if (data == "invalid_name") {

                    name_result.removeClass("name_result");
                    name_result.removeClass("success");
                    name_result.addClass("errors");
                    name_result.text("Name can contain only characters [A-Z or a-z] and whitespaces");
                    state = false;

                } else {

                    name_result.removeClass("name_result");
                    name_result.removeClass("errors");
                    name_result.addClass("success");
                    name_result.text("Name is available and set");
                    state = true;

                }

            });

        }

        return state;

    }

    function validateEmail()
    {

        var php_email = email.val();

        if (php_email == "") {

            email_result.removeClass("email_result");
            email_result.removeClass("success");
            email_result.addClass("errors");
            email_result.text("Email address is required");
            state = false;

        } else {

            $.post('includes/validate_form.php', {email: php_email}, function (data) {

                if (data == true) {
                    email_result.removeClass("email_result");
                    email_result.removeClass("success");
                    email_result.addClass("errors");
                    email_result.text("Email address is already registered");
                    state = false;
                } else {
                    email_result.removeClass("email_result");
                    email_result.removeClass("errors");
                    email_result.addClass("success");
                    email_result.text("Email address is available and set");
                    state = true;
                }

                if (data == "invalid_email") {

                    email_result.removeClass("email_result");
                    email_result.removeClass("success");
                    email_result.addClass("errors");
                    email_result.text("Invalid email address");
                    state = false;

                }

            });

        }

        return state;

    }

    $(".subscribe").click(function () {

        var all_data = $("#subscribe_form").serialize();

        if (state == true) {

            $.ajax({
                type: "POST",
                url: "includes/subscribe_new_user.php",
                data: all_data,
                success: function (data) {

                    if (data == true) {

                        alert("Success, you have registered");

                    } else {

                        alert("Success, you have errors");

                    }

                }
            });

        } else {

            alert("You have errors in your form");

        }

    });

});