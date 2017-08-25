$(document).ready(function (){

    $('#sliderExample1').cardSlider({
        url: "http://localhost:3000/cards/",
        numberSlides: 1
    });

    $('#sliderExample2').cardSlider({
        url: "http://localhost:3000/cards/",
        numberSlides: 2
    });
});

$.fn.cardSlider = function(options){
    var settings = $.extend({
        /* Default settings */
        url: "http://localhost:3000/cards/",
        numberSlides: 1
    }, options);

    var slider = this;
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

    /* Data request */
    $.getJSON(settings.url, function(data){
        slider.append('<div class="cards-container"></div>');

        $.each(data, function(key, value) {
            var $newCard = $card.clone();

            $newCard.find('.card-image').append('<img src=' + value.image_url + ' alt="Description">');
            $newCard.find('.title').append(value.title);
            $newCard.find('.card-body').append(value.text);

            slider.find('.cards-container').append($newCard);
        });

        slider.append('<div class="cardSlider-footer"><div class="cardSlider-arrows-wrapper"><button id="less" class="cardSlider-arrow">&#10094;</button> <button id="more" class="cardSlider-arrow">&#10095;</button></div></div>');

        var slides = slider.find('.card').length;

        if (settings.numberSlides > 1){
            var nextSlide = slider.find('.cards-container').children(':first-child');

            nextSlide.clone().insertAfter(slider.find('.cards-container').children(':last-child'));

            for (var x = 0; x < settings.numberSlides-2; x++){
                nextSlide = nextSlide.next().clone();
                nextSlide.insertAfter(slider.find('.cards-container').children(':last-child'));
            }
        }

        var slideIndex = 1;
        showDivs(slideIndex, slides);

        function plusDivs(n, slides) {
            showDivs(slideIndex += n, slides);
        }

        function showDivs(n, slides){
            var i;
            var x = slider.find('.card');

            if (n > slides){
                slideIndex = 1
            }

            if (n < 1) {
                slideIndex = x.length;
            }

            for (i = 0; i < x.length; i++){
                x[i].style.display = "none";
            }

            for (i = slideIndex; i < slideIndex+settings.numberSlides; i++){
                x[i-1].style.display = "inline-block";
            }
        }

        slider.find('#less').click(function(){
            plusDivs(-1, slides);
        });

        slider.find('#more').click(function(){
            plusDivs(1, slides);
        });
    });
};





