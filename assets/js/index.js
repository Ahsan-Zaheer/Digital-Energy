var owl = $('.owl-carousel');
       owl.owlCarousel({
            stagePadding: 200,
            lazyLoad:true,
            loop:true,
            margin:5,
            dots: false,
            pagination: false,
            autoplay:true,
            autoplayTimeout: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3 
                }
            }
      });

      AOS.init();