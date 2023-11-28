// sticky header
window.onscroll = function () {
    stickHeader();
};

function stickHeader() {
    var header = document.getElementById("main-navbar");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 10) {
        header.classList.add("fixed__header");
    } else {
        header.classList.remove("fixed__header");
    }
}

// hero slider
const heroSlider = new Swiper('.hero__slider', {
    loop: true,
    effect: 'fade',
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    pagination: {
        el: '.swiper-pagination.hero__slider--pagination',
        clickable: true,
    },

});

// Road Map slider
var swiper = new Swiper(".RoadmapSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1000, // Set the delay to 1000 milliseconds (1 second)
        disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

//Clients Slider
var swiper = new Swiper(".ClientsSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1000, // Set the delay to 1000 milliseconds (1 second)
        disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

// Smooth Scrolling
$(".nav-link").click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $(target).addClass('active');
    var headerHeight = $("#site__header").outerHeight() || 0;  // Replace 'your-header-id' with the actual ID or class of your header
    $('html, body').animate({
        scrollTop: $(target).offset().top - (headerHeight + 150)  // Subtract header height here
    }, 100);
});


var addClassOnScroll = function () {
    var windowTop = $(window).scrollTop();
    $('section[id]').each(function (index, elem) {
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);

        if (windowTop > (offsetTop - 50) && windowTop < (offsetTop + outerHeight)) {
            var elemId = $(elem).attr('id');
            $("nav ul li a.active").removeClass('active');
            $("nav ul li a[href='#" + elemId + "']").addClass('active');
        }
    });
};

$(function () {
    $(window).on('scroll', function () {
        addClassOnScroll();
    });
});


// Enable popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
$('.roadmap-top>span').on('click', function () {
    $('[data-bs-toggle="popover"]').popover('hide');
});

// Animations
AOS.init();

/*===========================================

 Preloader

=============================================*/

$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(550).fadeOut("slow");
    $("body").delay(550).css({
        overflow: "visible",
    });
});

/*===========================================

 Customizer

=============================================*/
// Function to lighten a color
function lightenColor(color, factor) {
    // Convert the hex color to RGB
    var r = parseInt(color.slice(1, 3), 16);
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);

    // Increase the intensity of each component
    r = Math.min(255, r + factor);
    g = Math.min(255, g + factor);
    b = Math.min(255, b + factor);

    // Convert the RGB values back to hex
    var newColor = "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    return newColor;
}

$(".color-switch").each(function () {
    $(this).css("background-color", $(this).data('color'));
});
$(".color-switch").click(function () {
    var lightenedColor = lightenColor($(this).data('color'), 95);
    $("body").get(0).style.setProperty("--primary-color", $(this).data('color'));
    $("body").get(0).style.setProperty("--light-color", lightenedColor);
});

$(".customizer-btn").click(function () {
    $(".customizer").toggleClass("show");
});
$(".close-customizer").click(function () {
    $(".customizer").toggleClass("show");
});

$(".layoutchange").click(function () {
    var layout= $(this).data("layout");
    if(layout == "boxed") {
        $(".container-fluid").addClass('container').removeClass('container-fluid');
    } else {
        $(".container").addClass('container-fluid').removeClass('container');
    }
});
