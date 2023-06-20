
// preloader
$(window).on('load', function () {
  $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
  $loader.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});
(function () {
  'use strict';
  //animate scroll
  $("#main_page .navbar-nav,.mouse-scroll").on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);

  });
  //modal
  $('#action_form_btn .btn').on("click", function (event) {
    event.preventDefault();
    $('#modal').addClass('open-modal');
  });
  $('#close-modal').on("click", function (event) {
    event.preventDefault();
    $('#modal').removeClass('open-modal');
  });
  //slider
  $(document).ready(function () {
    $('.agency-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 2000,
      pauseOnHover: false,
      fade: true,
      responsive: [
        {
          breakpoint: 992,

          settings: {
            dots: false
          }
        }
      ]
    });
    //portfolio menu
    $(function () {
      $("div.holder").jPages({
        containerID: "pagePorfolio",
        first: false,
        previous: false,
        next: false,
        last: false,
        perPage: 1,
        midRange: 5,
        links: "title",
        animation: "fadeInUp"
      });
    });
    //studies pagination
    $(function () {
      /* initiate the plugin */
      $("div.holder").jPages({
        containerID: "pageStudies",
        perPage: 4,
        startPage: 1,
        startRange: 1,
        midRange: 5,
        endRange: 1,
        previous: " ",
        next: " "
      });
    });
    //scroll nav
    setTimeout(function () {
      $('.inner-page .jp-previous').addClass('icon-left-arrow');
      $('.inner-page .jp-next').addClass('icon-right-arrow');
      $('.inner-page .holder a').on("click", function (event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1500);
      });
    }, 500);

    //studies pagination
    $(function () {
      $("div.holder").jPages({
        containerID: "pageBlog",
        perPage: 3,
        startPage: 1,
        startRange: 1,
        midRange: 5,
        endRange: 1,
        previous: " ",
        next: " "
      });
    });
  });
})();