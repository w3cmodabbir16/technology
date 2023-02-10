$(function(){
    // counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1500,
    });

    new WOW().init();


    // project 
    $('.project_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
        
    });

    //testimunial

    $('.steti_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          }

        ]
      });

    // blog 
    $('.blog_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 922,
            settings: {
              slidesToShow: 2,
            }
          }

        ]

      });

    $('.brand_main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          }
          
        ]
      });

      // bact_to_top

      $('.bact_to_top'). click (function(){
        $('html, body'). animate ({scrollTop:0}, 1500)
      });

      $(window).scroll(function(){
        var scrolling = $(this). scrollTop();
        if(scrolling > 200){
          $('.bact_to_top').fadeIn(500);
        }
        else{
          $('.bact_to_top').fadeOut(500);
        }
        if(scrolling > 200){
          $('.navbar_main').addClass('background');
        }
        else{
          $('.navbar_main').removeClass('background');
        }

      });

});