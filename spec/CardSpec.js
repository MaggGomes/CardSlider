describe("CardSlider tests", function(){

    it("Should find JQuery", function(){
        expect($).not.toBeNull();
    });

    it("Should have at least one CardSlider class element", function(){
        loadFixtures("testFixture.html");
        expect($('.cardSlider')).toExist();
    });

    it("Card slider should have one card", function(){
        loadFixtures("testFixture.html");

        var $testingSlider = $('#sliderExample1');
        var $container = $('<div class="cardSlider"><div class="cards-container"></div></div>');

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

        $card.find('.card-image').append('<img src="http://lorempixel.com/300/150/" alt="Description">');
        $card.find('.title').append("We are Humans");
        $card.find('.card-body').append("We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.");

        $container.find('.cards-container').append($card);

        $container.append('<div class="cardSlider-footer"><div class="cardSlider-arrows-wrapper"><button id="less" class="cardSlider-arrow">&#10094;</button> <button id="more" class="cardSlider-arrow">&#10095;</button></div></div>');

        $testingSlider.cardSlider({
            url: "http://127.0.0.1:3000/cards?_start=0&_end=1",
            numberSlides: 1
        });

        expect($testingSlider).toHaveHtml($container.prop('innerHTML'));
    });
});