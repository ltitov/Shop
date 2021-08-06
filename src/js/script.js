// Webp image code

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// начало скрипт табов //
$("ul.tabs__caption").on("click", "li:not(.active)", function () {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
});
// конец скрипт табов //

const oneSwiper = new Swiper('.catalog__content', {
    cssMode: true,
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    // keyboard: true,
    // mousewheel: true,
    navigation: {
        prevEl: '.catalog__control > .swiper-button-prev',
        nextEl: '.catalog__control > .swiper-button-next',
    },
});

const twoSwiper = new Swiper('.catalog__product', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    clickable: true,
    pagination: {
        el: '.catalog__product > .swiper-pagination',
    },
});

