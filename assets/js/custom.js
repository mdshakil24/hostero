$(document).ready(function () {

    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.ht-header-menu > ul').slideToggle();
    });

})
