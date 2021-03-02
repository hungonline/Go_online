(function ($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
            } else {
                $('#to_top').fadeOut();
            }
        });


        $(window).scroll(function () {
            if ($(window).scrollTop() >= 42) {
                $('#wrap-main-nav').addClass('pin');
            } else {
                $('#wrap-main-nav').removeClass('pin');
            }
        });

        $("#to_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
    }

    //scrollBar
    function scrollBar() {
        var scrollContainer = $(".scrollbar-inner");
        if (scrollContainer.length > 0) {
            scrollContainer.scrollbar();
        }
    }
    //resizeSite
    function resizeSite() {
        var heightVideo = $('#player_playing').height() - 64;
        $('.detail_right .scrollbar-inner').height(heightVideo);
    }
    //onCLick
    function onCLick() {
        $('.search-btn').click(function () {
            $(".overlay-bg").fadeOut();
            $(".main-nav").removeClass("show-all-menu");
            $(".all-menu-tablet").removeClass("close-menu-tablet");
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
                $('.search-wrap').fadeIn();
                $('.search-wrap input').focus();
            } else {
                $(this).removeClass('is-clicked');
                $('.search-wrap').fadeOut();
            }
        });
        $(".all-menu-tablet").click(function () {
            $(this).toggleClass("close-menu-tablet");
        });
        $(".all-menu").click(function () {
            $(".overlay-bg").toggle();
            $('.search-wrap').fadeOut();
            $('.search-btn').removeClass('is-clicked');
            $(".main-nav").toggleClass("show-all-menu");
        });
        $(".overlay-bg").click(function () {
            $(this).hide();
            $(".all-menu").removeClass("close-menu-tablet");
            $(".main-nav").removeClass("show-all-menu");
        });
        $('.sub_menu').click(function () {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('.level2').slideToggle("slow", function () {});
        });
        $('.sub-icon2').click(function () {
            if ($(this).next('ul').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('ul').slideToggle("slow", function () {});
        });

    }
    //scrollBar
    function slideSwiper() {
        var swiperCusomer = new Swiper('.customer-home .swiper-container', {
            navigation: {
                nextEl: '.swiper-customer-next',
                prevEl: '.swiper-customer-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        var swiperNumber = new Swiper('.slide-number .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 80,
            // loop: true,
            navigation: {
                nextEl: '.swiper-number-next',
                prevEl: '.swiper-number-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                }
            }
        });
    }

    //magnificPopup
    function magnificPopup() {
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-with-zoom',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            removalDelay: 300,
        });
        $('.magnific_popup .magnific_thumb').magnificPopup({
            type: 'image',
            midClick: true,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: false,
            }
        });

    }

    // function datepicker() {
    //     $('.datepicker-input').Zebra_DatePicker({
    //         format: 'd/m/Y'
    //     });

    // }

    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        slideSwiper();
        magnificPopup();
        // datepicker();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);