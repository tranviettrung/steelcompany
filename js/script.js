/**
 * Created by tranv on 23/2/2017.
 */
$(document).ready(function() {

    /* activate jquery isotope */
    var $container = $('#product-grid').isotope({
        itemSelector : '.product-grid-item',
        isFitWidth: true
    });


    $container.isotope({ filter: '*' });

    // filter items on button click
    $('#product-grid-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});



