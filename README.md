# CardSlider
Card Slider is a component developed to display a configurable number of cards at a time, and slide for more when the user clicks the arrow buttons.
The project was developed with the help of [*Karma*](https://karma-runner.github.io/1.0/index.html), [*Jasmine*](https://github.com/jasmine/jasmine) and [*Jasmine-JQuery*](https://github.com/velesin/jasmine-jquery) for test purposes.

**NOTE**: For test purposes you should use the *dummy* data provided in repo : https://git.io/vPNAT

## Usage

    npm update
    npm install -g karma-cli

### Running aplication
For running the Card Slider simply open the file *index.html* located at the root of the project

For running the aplication simply create a *div* element in the DOM with the class *cardSlider* and then call it in your script using function *cardSlider()*.

**Example**:

In index.html:

    <div id="sliderExample1" class="cardSlider"></div>  
    
In script.js:

    $('#sliderExample1').cardSlider({
        url: "http://localhost:3000/cards/",
        numberSlides: 2
    });

### Testing aplication
For testing the aplication use the following command:

    npm test

