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

const oneSwiper = new Swiper('.js__one-slider > .swiper-container', {
    cssMode: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    keyboard: true,
    mousewheel: true,
    navigation: {
        prevEl: '.js__one-slider > .swiper-button-prev',
        nextEl: '.js__one-slider > .swiper-button-next',
    },
});

const twoSwiper = new Swiper('.product > .swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

