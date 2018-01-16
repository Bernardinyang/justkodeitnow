/**
 * Created by Bernard Inyang on 12/16/2017.
 */
$(document).ready(function () {

    var name = $("#name");
    var name_result = $(".name_result");

    var email = $("#email");
    var email_result = $(".email_result");

    var website = $("#website");
    var website_result = $(".website_result");

    var phone_no = $("#phone_no");
    var phone_no_result = $(".phone_no_result");

    var subject = $("#subject");
    var subject_result = $(".subject_result");

    var captcha = $("#captcha");
    var captcha_result = $(".captcha_result");

    var message = $("#message");
    var message_result = $(".message_result");

    var reset = $("#reset");
    var send = $(".send");

    name.keyup(validateName);
    email.keyup(validateEmail);
    website.keyup(validateWebsite);
    phone_no.keyup(validatePhoneNo);
    subject.keyup(validateSubject);
    captcha.keyup(validateCaptcha);
    message.keyup(validateMessage);
    reset.click(validateReset);
    send.click(sendMessage);

    var state = false;

    function validateName()
    {
        var php_name = name.val();

        if (php_name == "") {

            name_result.removeClass("name_result");
            name_result.removeClass("success");
            name_result.addClass("errors");
            name.removeClass("success2");
            name.addClass("errors2");
            name_result.text("Name is required");
            state = false;

        } else if (php_name.length < 4) {

            name_result.removeClass("name_result");
            name_result.removeClass("success");
            name_result.addClass("errors");
            name.removeClass("success2");
            name.addClass("errors2");
            name_result.text("Name must be at least 4 characters and above");
            state = false;

        } else {

            $.post('../includes/validate_contact_form.php', {name: php_name}, function (data) {

                if (data == "invalid_name") {

                    name_result.removeClass("name_result");
                    name_result.removeClass("success");
                    name_result.addClass("errors");
                    name.removeClass("success2");
                    name.addClass("errors2");
                    name_result.text("Name can contain only characters [A-Z or a-z] and whitespaces");
                    state = false;

                } else {

                    name_result.removeClass("name_result");
                    name_result.removeClass("errors");
                    name_result.addClass("success");
                    name.addClass("success2");
                    name.removeClass("errors2");
                    name_result.text("Name is ok and set");
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
            email.removeClass("success2");
            email.addClass("errors2");
            email_result.text("Email address is required");
            state = false;

        } else {

            $.post('../includes/validate_contact_form.php', {email: php_email}, function (data) {

                if (data == "invalid_email") {

                    email_result.removeClass("email_result");
                    email_result.removeClass("success");
                    email_result.addClass("errors");
                    email.removeClass("success2");
                    email.addClass("errors2");
                    email_result.text("Invalid email address");
                    state = false;

                } else {

                    email_result.removeClass("email_result");
                    email_result.removeClass("errors");
                    email_result.addClass("success");
                    email.addClass("success2");
                    email.removeClass("errors2");
                    email_result.text("Email address is ok and set");
                    state = true;

                }

            });

        }

        return state;

    }

    function validateWebsite()
    {
        var php_website = website.val();

        if (php_website == "") {

            website_result.addClass("website_result");
            website_result.removeClass("success");
            website_result.removeClass("errors");
            website.removeClass("success2");
            website.removeClass("errors2");
            website_result.text("Enter your website url below");
            state = true;

        } else {

            $.post('../includes/validate_contact_form.php', {website: php_website}, function (data) {

                if (data == "invalid_website") {

                    website_result.removeClass("website_result");
                    website_result.removeClass("success");
                    website_result.addClass("errors");
                    website.removeClass("success2");
                    website.addClass("errors2");
                    website_result.text("Invalid website");
                    state = false;

                } else {

                    website_result.removeClass("website_result");
                    website_result.removeClass("errors");
                    website_result.addClass("success");
                    website.addClass("success2");
                    website.removeClass("errors2");
                    website_result.text("Website is ok and set");
                    state = true;

                }

            });

        }

        return state;

    }

    function validatePhoneNo()
    {
        var php_phone_no = phone_no.val();

        if (php_phone_no == "") {

            phone_no_result.addClass("phone_no_result");
            phone_no_result.removeClass("success");
            phone_no_result.removeClass("errors");
            phone_no.removeClass("success2");
            phone_no.removeClass("errors2");
            phone_no_result.text("Enter your phone number below");
            state = true;

        } else {

            $.post('../includes/validate_contact_form.php', {phone_no: php_phone_no}, function (data) {

                if (data == "invalid_phone_no") {

                    phone_no_result.removeClass("phone_no_result");
                    phone_no_result.removeClass("success");
                    phone_no_result.addClass("errors");
                    phone_no.removeClass("success2");
                    phone_no.addClass("errors2");
                    phone_no_result.text("Invalid phone number");
                    state = false;

                } else {

                    phone_no_result.removeClass("phone_no_result");
                    phone_no_result.removeClass("errors");
                    phone_no_result.addClass("success");
                    phone_no.addClass("success2");
                    phone_no.removeClass("errors2");
                    phone_no_result.text("Phone number is ok and set");
                    state = true;

                }

            });

        }

        return state;

    }

    function validateSubject()
    {
        var php_subject = subject.val();

        if (php_subject == "") {

            subject_result.removeClass("subject_result");
            subject_result.removeClass("success");
            subject_result.addClass("errors");
            subject.removeClass("success2");
            subject.addClass("errors2");
            subject_result.text("Enter the subject of your message below");
            state = false;

        } else {

            $.post('../includes/validate_contact_form.php', {subject: php_subject}, function (data) {

                if (data == "ok") {

                    subject_result.removeClass("subject_result");
                    subject_result.removeClass("errors");
                    subject_result.addClass("success");
                    subject.addClass("success2");
                    subject.removeClass("errors2");
                    subject_result.text("Subject is ok and set");
                    state = true;

                } else {

                    subject_result.removeClass("subject_result");
                    subject_result.removeClass("success");
                    subject_result.addClass("errors");
                    subject.removeClass("success2");
                    subject.addClass("errors2");
                    subject_result.text("Invalid text format");
                    state = false;

                }

            });

        }

        return state;

    }

    function validateCaptcha()
    {
        var php_captcha = captcha.val();

        if (php_captcha == "") {

            captcha_result.removeClass("captcha_result");
            captcha_result.removeClass("success");
            captcha.removeClass("success2");
            captcha.addClass("errors2");
            captcha_result.addClass("errors");
            captcha_result.text("Enter the answer to the question below");
            state = false;

        } else {

            captcha_result.removeClass("captcha_result");
            captcha_result.addClass("success");
            captcha.addClass("success2");
            captcha_result.removeClass("errors");
            captcha_result.text("Captcha is ok and set");
            state = true;

        }

        return state;

    }

    function validateMessage()
    {
        var php_message = message.val();

        if (php_message == "") {

            message_result.removeClass("message_result");
            message_result.removeClass("message_success");
            message_result.addClass("message_errors");
            message.removeClass("success2");
            message.addClass("errors2");
            message_result.text("Message is required");
            state = false;

        } else if (php_message.length < 100) {

            message_result.removeClass("message_result");
            message_result.removeClass("message_success");
            message_result.addClass("message_errors");
            message.removeClass("success2");
            message.addClass("errors2");
            message_result.text("Name must be at least 100 characters and above");
            state = false;

        } else {

            message_result.removeClass("message_result");
            message_result.removeClass("message_errors");
            message_result.addClass("message_success");
            message.addClass("success2");
            message.removeClass("errors2");
            message_result.text("Name is ok and set");
            state = true;

        }

        return state;

    }

    function sendMessage()
    {

        var all_data = $("#contact_form").serialize();

        if (state == true) {

            $.ajax({
                type: "POST",
                url: "../includes/send_mail.php",
                data: all_data,
                success: function (data) {

                    if (data == true) {

                        alert("your message have been sent, you will receive a reply from us soon. Thank you...");

                    } else {


                    }

                }
            });

        } else {

            alert("You have errors in your form");

        }
    }

    function validateReset()
    {

        name_result.addClass("name_result");
        name_result.removeClass("success");
        name_result.removeClass("errors");
        name.removeClass("success2");
        name.removeClass("errors2");
        name_result.text("Enter your name below");

        email_result.addClass("email_result");
        email_result.removeClass("success");
        email_result.removeClass("errors");
        email.removeClass("success2");
        email.removeClass("errors2");
        email_result.text("Enter your email below");

        website_result.addClass("website_result");
        website_result.removeClass("success");
        website_result.removeClass("errors");
        website.removeClass("success2");
        website.removeClass("errors2");
        website.text("Enter your website url below");

        phone_no_result.addClass("phone_no_result");
        phone_no_result.removeClass("success");
        phone_no_result.removeClass("errors");
        phone_no.removeClass("success2");
        phone_no.removeClass("errors2");
        phone_no_result.text("Enter your phone number below");

        subject_result.addClass("subject_result");
        subject_result.removeClass("success");
        subject_result.removeClass("errors");
        subject.removeClass("success2");
        subject.removeClass("errors2");
        subject_result.text("Enter the subject of your message below");

        captcha_result.addClass("captcha_result");
        captcha_result.removeClass("success");
        captcha_result.removeClass("errors");
        captcha.removeClass("success2");
        captcha.removeClass("errors2");
        captcha_result.text("Enter the answer to the question below");

        message_result.addClass("message_result");
        message_result.removeClass("message_success");
        message_result.removeClass("message_errors");
        message.removeClass("success2");
        message.removeClass("errors2");
        message_result.text("Enter your message above");

    }

});
