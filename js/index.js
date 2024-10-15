jQuery(document).ready(function(){	
    jQuery('[data-toggle="tooltip"]').tooltip();

    jQuery('.main-slider').owlCarousel({
        rtl:true,
        loop:true,
        margin:8,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    jQuery('[data-toggle="tooltip"]').tooltip();

    jQuery('.hero').owlCarousel({
        rtl:true,
        loop:true,
        margin:8,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});




$(".comment_btn").click(function (e) { 
    e.preventDefault();
    Swal.fire({
        title: "نظرتان با موفقیت ثبت گردید",
        icon: "success"
      });
});


