$(document).ready(function (){


    $.getJSON("http://localhost:3000/cards/", function( data ) {
        $('.cardSlider').append('<div class="cards-container"></div>');


        $.each(data, function(key, value) {
            /* Reusable Card component*/
            var $card = $(
                '<div class="card">' +
                    '<div class="card-image"></div>' +
                    '<div class="card-content">' +
                        '<div class="card-header">' +
                            '<div class="card-logo"><img src="res/images/logo.png" alt="Logo"></div>' +
                            '<div class="card-presentation">' +
                                '<div class="title"></div>' +
                                '<div class="description">what will you find here</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="card-body"></div>' +
                        '<div class="card-footer">Learn More</div>' +
                    '</div>' +
                '</div>');


            $card.find('.card-image').append('<img src=' + value.image_url + ' alt="Description">');
            $card.find('.title').append(value.title);
            $card.find('card-body').append(value.text);



            $('.cardSlider .cards-container').append($card);
        });






        $('.cardSlider').append('<div class="cardSlider-footer">&lsaquo; &rsaquo;</div>');

    });


    $('.cardSlider-footer').click(function(){
        $(this).css('background-color', 'red');
    });

});
