$(document).ready(function(){
    $('.slick-wrapper').slick({
        prevArrow: '<button type="button" class="prev"><img src="icons/icon-left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/icon-right.svg"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
             }
            }] 
        });
        $('ul.services__tabs').on('click', 'li:not(.services__tab_active)', function() {
            $(this)
              .addClass('services__tab_active').siblings().removeClass('services__tab_active')
              .closest('div.container').find('div.services__content').removeClass('services__content_active').eq($(this).index()).addClass('services__content_active');
        });

        //modal window

    $('[data-modal=letter]').on('click', function() {
        $('.overlay, #letter').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #letter').fadeOut();
    });
    
    
});
window.addEventListener('DOMContentLoaded', () => {
    const submenu = document.querySelector('.submenu'),
    submenuItem = document.querySelectorAll('.submenu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        submenu.classList.toggle('submenu_active');
    });

    submenuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            submenu.classList.toggle('submenu_active');
        })
    })
})
