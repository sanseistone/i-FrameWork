$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            575: {
                items: 1,
                nav: true,
                dots: false
            },
            991: {
                items: 1,
                nav: true,
                dots: false
            },
            1199: {
                items: 1,
                nav: true,
                dots: false
            }
        }
    });
    $('.owl-four').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fas fa-paw"></i>', '<i class="fas fa-paw"></i>'],
        autoplay: false,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            575: {
                items: 3,
                nav: true,
                dots: false
            },
            991: {
                items: 3,
                nav: true,
                dots: false
            },
            1199: {
                items: 4,
                nav: true,
                dots: false
            }
        }
    });
    $('.owl-five').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fas fa-paw"></i>', '<i class="fas fa-paw"></i>'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            575: {
                items: 3,
                nav: true,
                dots: false
            },
            991: {
                items: 4,
                nav: true,
                dots: false
            },
            1199: {
                items: 5,
                nav: true,
                dots: false
            }
        }
    });
    $('.owl-six').owlCarousel({
        loop: true,
        margin: 50,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: true
            },
            575: {
                items: 3,
                nav: false,
                dots: true
            },
            991: {
                items: 4,
                nav: false,
                dots: true
            },
            1199: {
                items: 6,
                nav: false,
                dots: true
            }
        }
    });
});
