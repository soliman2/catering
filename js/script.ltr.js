$(function () {
    "use strict";

    //Moving Active class in Navbar Menu
    $(".navbar .menu-list>li:first-child").addClass("active");
    $(".navbar .menu-list>li").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
    });



    //Add Class is to Button Which Open menu in Mobile
    $(".button-menu-bg").on('click', function () {
        $(".button-menu").toggleClass("is");
        $("nav").slideToggle();

    });


    //Fixed Navbar Menu
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $(".menu").addClass("fixed", 9000);
        } else {
            $(".menu").removeClass("fixed");

        }

    });


    //Smoth Scroll in Navbar
    $(".menu-list li a").on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - 95
        }, 1000);
    });

    //Slider Of Haeder
    $('.header-slider').slick({
        dots: true,
        //        rtl: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,

    });

    //Our Team Slider
    $('.our-team-slider').slick({
        //      dots: true,
        //        rtl: true,
        autoplay: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    //Stop defult links
    $('ul li a').on('click', function (e) {
        e.preventDefault();

    });

    // Attr For Background Image
    $("[data-src]").each(function () {
        var backgroundImage = $(this).attr("data-src");
        $(this).css("background-image", "url(" + backgroundImage + ")");
    });


    //Button Go to Top Hidden and Show
    $(window).scroll(function () {


        var buttonUp = $("#button-go-up");

        if ($(window).scrollTop() >= 400) {
            buttonUp.fadeIn(1000);
        } else {
            buttonUp.fadeOut(1000);

        }


    });

    //Button Click To Scroll to top
    $("#button-go-up").on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })



    //model Box
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});
