$(function (){

    $('.slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000

    });
    $(".btn__nav").on("click", function () {
        var target = $(this).data ("target");
        $(target).toggleClass("nav__list--open");
    }

    );

































































    $(function () {

        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 80000,
            from: 28800,
            to: 50000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true,
            hide_from_to: true
        });

    });
});
function initMap() {
    var uluru = {lat: 55.737003, lng: 37.588581};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: uluru,
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
