/**
 * Created by Bernard Inyang on 12/15/2017.
 */

$(document).ready(function () {

    $("header nav li").hover(function () {
        $(this).children(":hidden").slideDown();
    }, function () {
        $(this).parent().find(".dropDown").slideUp();
    });

    $("#burgerMenu").on("click", function() {

        //$("header nav ul").toggleClass("open");

        $("header nav ul").slideUp("fast").toggleClass("open").slideDown("fast");

    });

});