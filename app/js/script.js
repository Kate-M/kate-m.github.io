$(document).ready(function () {
   
    $('.button_hide a').click(function (event) {
         event.preventDefault();
         $('#back').toggleClass('back4v');
         $('.text').slideToggle(300);
         $('.button_hide a p').text($('.button_hide a p').text().trim() == "Скрыть текст" ? "Раскрыть текст" : "Скрыть текст");
         $('.button_hide a').toggleClass('button_vis');
         
        return false;
    });
     $('#navi a').click(function (event) {
         event.preventDefault();
        //  $('.style_nav td').toggleClass('active');
        return false;
    });

    $('.center').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            arrows: true

        });


    $(window).scroll(function(e){
        parallax();
    });
        function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('bottom',-(scrolled*0.16)+'px');
    }	
});