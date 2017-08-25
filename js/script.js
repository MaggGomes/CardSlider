$(document).ready(function (){

    $('#sliderExample1').cardSlider({
        url: "http://localhost:3000/cards/",
        numberSlides: 1
    });
});

$.fn.cardSlider = function(options){
    var settings = $.extend({
        // Default options.
        url: "http://localhost:3000/cards/",
        numberSlides: 1
    }, options);

    console.log(settings.numberSlides);
    var slider = this;

    $.getJSON(settings.url, function(data) {
        slider.append('<div class="cards-container"></div>');

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
            $card.find('.card-body').append(value.text);

            slider.find('.cards-container').append($card);
        });

        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        /*function showDivs(n) {
            var i;
            var x = slider.find('.card');
            console.log(x.length);
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length} ;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }

            x[slideIndex-1].style.display = "block";
        }*/

        function showDivs(n){
            var i;
            var x = slider.find('.card');

            var z = 2;

            if (n > x.length){
                slideIndex = 1
            }

            if (n < 1) {
                slideIndex = x.length
            }

            for (i = 0; i < x.length; i++){
                x[i].style.display = "none";
            }

            x[slideIndex-1].style.display = "block";
        }

        slider.append('<div class="cardSlider-footer"><div class="cardSlider-arrows-wrapper"><button id="less" class="cardSlider-arrow">&#10094;</button> <button id="more" class="cardSlider-arrow">&#10095;</button></div></div>');

        $('#less').click(function(){
            plusDivs(-1);
        });
        $('#more').click(function(){
            plusDivs(1);
        });
    });
};

